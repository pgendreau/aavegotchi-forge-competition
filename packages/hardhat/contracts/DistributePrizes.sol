//SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.17;

interface IERC1155 {
    function balanceOf(address _owner, uint256 _id) external view returns (uint256);
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
    function safeBatchTransferFrom(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external;
}

/// @title Distribute Prizes for Aavegotchi Forge competition
/// @author PG
/// @notice The contract is permissionless and has no owner, it can be used to distribute any erc1155 token
/// @dev Does some sanity checks and optimize for gas
contract DistributePrizes {
  
    /// @dev Emitted when tokens are distributed
    /// @param token The address of the IERC1155 token contract used for the distribution
    /// @param sender The address that initiated the distribution
    /// @param recipient The address that received the tokens
    /// @param ids An array of token IDs that were sent to that recipient
    /// @param amounts An array of the amounts of tokens distributed to that recipient
    event TokensDistributed(
        IERC1155 indexed token,
        address indexed sender,
        address recipient,
        uint256[] ids,
        uint256[] amounts
    );

    /// @notice Batch send NFTs to recipients
    /// @dev Reverts the whole transaction if initial balance is insufficient. To allow for this 
    ///      all amounts need to have the same length as ids (including 0s)
    /// @param token The address of the IERC1155 token contract that will be used for distribution
    /// @param recipients An array of addresses that will receive the tokens
    /// @param ids An array of token IDs that will be distributed
    /// @param amounts A 2D array where each sub-array corresponds to the amounts of tokens for each recipient
    /// @param data Additional data to pass along with the distribution
    function distribute(IERC1155 token, address[] calldata recipients, uint256[] calldata ids, uint256[][] calldata amounts, bytes calldata data) external {
        require(token.isApprovedForAll(msg.sender, address(this)), "Sender has not approved contract for distribution");
        require(recipients.length == amounts.length, "Invalid input: recipients and amounts must have the sanme number of elements");

        // calculate actual and total balances for each id
        for (uint256 i = 0; i < ids.length; i++) {
            uint256 preBalance = token.balanceOf(msg.sender, ids[i]);
            uint256 reqBalance;
            for (uint256 j = 0; j < amounts.length; j++) {
                require(amounts[j].length == ids.length, "Invalid input: the number of amounts does not match the number of ids");
                reqBalance += amounts[j][i];
            }

            // make sure sender has enough of each id
            require(reqBalance <= preBalance, "Insufficient balance");
        }

        // remove zero entries before sending to the forge contract
        for (uint256 i = 0; i < recipients.length; i++) {

            // get number of non-zero amount to create fixed-length arrays
            uint256 len;
            for (uint256 j = 0; j < ids.length; j++) {
                if (amounts[i][j] != 0) {
                    len++;
                }
            }
            
            // if at least one token to transfer
            if (len > 0) {
                uint256[] memory recIds = new uint256[](len);
                uint256[] memory recAmounts = new uint256[](len);

                // populate arrays with ids/amounts to transfer
                uint256 index;
                for (uint256 j = 0; j < ids.length; j++) {
                    if (amounts[i][j] != 0) {
                        recIds[index] = ids[j];
                        recAmounts[index] = amounts[i][j];
                        index++;
                    }
                }
                token.safeBatchTransferFrom(msg.sender, recipients[i], recIds, recAmounts, data);
                emit TokensDistributed(token, msg.sender, recipients[i], recIds, recAmounts);
            }
        }
    }
}
