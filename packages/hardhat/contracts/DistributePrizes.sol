//SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.4;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";

interface IERC1155 {
    function balanceOf(address _owner, uint256 _id) external view returns (uint256);
    function isApprovedForAll(address _owner, address _operator) external view returns (bool);
    function safeBatchTransferFrom(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data) external;
}

contract DistributePrizes {
    function distribute(IERC1155 token, address[] calldata recipients, uint256[] calldata ids, uint256[][] calldata amounts, bytes calldata data) external {
        require(token.isApprovedForAll(msg.sender, address(this)), "Sender has not approved disperse contract");
        require(recipients.length == amounts.length, "Invalid input: recipients and amounts must have the sanme number of elements");

        for (uint256 i = 0; i < ids.length; i++) {
            uint256 preBalance = token.balanceOf(msg.sender, ids[i]);
            uint256 reqBalance;
            for (uint256 j = 0; j < amounts.length; j++) {
                require(amounts[j].length == ids.length, "Invalid input: the number of amounts does not match the number of ids");
                reqBalance += amounts[j][i];
            }

            require(reqBalance <= preBalance, "Insufficient balance");
        }

        for (uint256 i = 0; i < recipients.length; i++) {

            uint256 len;
            for (uint256 j = 0; j < ids.length; j++) {
                if (amounts[i][j] != 0) {
                    len++;
                }
            }
            
            if (len > 0) {
                uint256[] memory recIds = new uint256[](len);
                uint256[] memory recAmounts = new uint256[](len);

                // uint256[] memory recIds;
                // uint256[] memory recAmounts;

                uint256 index;
                for (uint256 j = 0; j < ids.length; j++) {
                    if (amounts[i][j] != 0) {
                        recIds[index] = ids[j];
                        recAmounts[index] = amounts[i][j];
                        index++;
                    }
                }
                console.log("sending for: %s", recipients[i]);
                token.safeBatchTransferFrom(msg.sender, recipients[i], recIds, recAmounts, data);

                // if (recIds.length > 0) {
                //     token.safeBatchTransferFrom(msg.sender, recipients[i], recIds, recAmounts, data);
                // }
            }
        }
    }
}
