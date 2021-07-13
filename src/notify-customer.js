exports.handler = async ({ Records }) => {
  try {
    console.log("notify-customer.handler");

    const [{ body }] = Records; // in reality you would probably batch here and forEach
    const { responsePayload } = JSON.parse(body);

    // here you could send an SMS to the customer using sns or an email using SES
    // stating the payment has been successful..
    console.log(
      `notified the customer with body: ${responsePayload.paymentId}`
    );
  } catch (error) {
    console.error(error);

    throw new Error(error.message);
  }
};
