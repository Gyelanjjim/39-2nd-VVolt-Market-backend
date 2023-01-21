const tosspaymentService = require('../services/tossPaymentService');

const tossPaymentConfirm = async (req, res) => {
  try {
    const { amount, orderId, paymentKey } = req.body;
    if (!amount || !orderId || !paymentKey) {
      return res.status(404).json({ message: 'Input Error' });
    }
    const result = await tosspaymentService.tossPaymentConfirm(
      amount,
      orderId,
      paymentKey
    );
    return res.status(201).json({ message: 'Input Success!!!!' });
  } catch (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  tossPaymentConfirm,
};
