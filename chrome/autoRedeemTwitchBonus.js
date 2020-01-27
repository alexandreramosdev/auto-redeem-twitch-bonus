function AutoRedeemTwitchBonus() {
  try {
    const reward = document.querySelector(".claimable-bonus__icon");
    if (reward) {
      reward.click();
      console.log(
        `Reward successfully redeemed at ${new Date().toTimeString().slice(0, 8)}`
      );
    }
  } catch (error) {
    console.error(`Oops! something went wrong: ${error}`);
  }
}

setInterval(AutoRedeemTwitchBonus, 10000);
