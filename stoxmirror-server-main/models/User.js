const mongoose = require("mongoose");


const ChallengeSchema = new mongoose.Schema({
  challengeId: String,
  title: String,
  entryFee: Number,
  duration: Number,
  expectedProfitRate: String,
  minProfit: Number,
  reward: String,
  profit: { type: Number, default: 0 },
  daysLeft: Number,
  joinedAt: { type: Date, default: Date.now },
  isCompleted: { type: Boolean, default: false },
  rewardClaimed: { type: Boolean, default: false }
});


const UsersSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String },
    challengeBalance: { type: Number, default: 0 },


    email: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    password: { type: String, required: true, min: 6, max: 50 },

    // ✅ KYC & account state
    kyc: { type: String, default: "unverified" },
    verified: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false },

    // ✅ Referrals
    referrals: {
      referralCode: { type: String },
      referredBy: { type: String, default: null },
      referredUsers: { type: [String], default: [] },
      referralBonus: { type: Number, default: 0 }
    },

    // ✅ Trading data
    
      copytrading: { type: Boolean, default: false },
      subscribedTrader: { type: String, default: null },
      balance: { type: Number, default: 0 },
      profit: { type: Number, default: 0 },
      amountDeposited: { type: String, default: null },

      accounts: {
        eth: { address: { type: String, default: "" } },
        ltc: { address: { type: String, default: "" } },
        btc: { address: { type: String, default: "" } },
        usdt: { address: { type: String, default: "" } }
      },

      transactions: { type: Array, default: [] },
       challengeTransactions: { type: Array, default: [] },
        challengeWithdrawals: { type: Array, default: [] },
      withdrawals: { type: Array, default: [] }
    ,

    // ✅ Plans
    plans: { type: Array, default: [] },
     challenges: { type: [ChallengeSchema], default: [] },

    // ✅ Challenges
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UsersSchema);
