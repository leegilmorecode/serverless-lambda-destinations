exports.handler = async ({ Records }) => {
  console.log("process-payment.handler");
  try {
    // get the body from api gateway
    const [
      {
        Sns: { Message: body },
      },
    ] = Records;

    const record = JSON.parse(body);

    console.log(`record: ${JSON.stringify(record)}`);

    // generate a random error to show detinations depending on success or failure
    if (Math.random() > 0.5) {
      throw new Error(`random error for paymentId ${record.paymentId}`);
    }

    console.log(`successful payment for paymentId ${record.paymentId}`);
    return record;
  } catch (error) {
    console.error(error);

    throw new Error(error.message);
  }
};
