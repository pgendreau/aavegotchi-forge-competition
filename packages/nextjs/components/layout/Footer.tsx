export const Footer = () => {
  return (
    <div className="flex flex-col items-center py-5">
      <div>
        Funded by{" "}
        <a href="https://dao.aavegotchi.com" className="url">
          the Aavegotchi DAO
        </a>
      </div>
      <span>Made by</span>
      <div className="flex flex-row gap-x-5">
        <DiscordProfile id="745967743949602818" name="Oliver Spoon" />
        <DiscordProfile id="276081752236097536" name="FiFoOoO" />
        <DiscordProfile id="829312065437040730" name="PG" />
      </div>
    </div>
  );
};

const DiscordProfile = (props: { id: string; name: string }) => {
  return (
    <a href={`https://discordapp.com/users/${props.id}`} className="url" target="_blank">
      {props.name}
    </a>
  );
};
