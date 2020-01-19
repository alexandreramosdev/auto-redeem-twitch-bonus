function AutoRedeemTwitchBonus() {
  try {
    const rewardButton = document.querySelector(
      "button[class='tw-button tw-button--success tw-interactive']"
    );
    if (rewardButton) {
      rewardButton.click();
      console.log(`Reward successfully redeemed at ${new Date().toTimeString().slice(0, 8)}`);
    }
  } catch (error) {
    console.error(`Oops! something went wrong: ${error}`);
  }
}

AutoRedeemTwitchBonus();

setInterval(AutoRedeemTwitchBonus, 60000);