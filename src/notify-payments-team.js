exports.handler = async ({ Records }) => {
  try {
    console.log("notify-payments-team.handler");

    const [{ body }] = Records; // in reality you would probably batch here and forEach
    const { responsePayload } = JSON.parse(body);

    // here you could send a teams or slack message to the
    // failed payments team to investigate..
    console.log(
      `notified the failed payments team with: '${responsePayload.errorMessage}'`
    );
  } catch (error) {
    console.error(error);

    throw new Error(error.message);
  }
};
