import upbit from '../src';
// const upbit = require("../dist");
// const upbit = require("../src");
const moment = require("moment");
// const models = require("../src/models");
const { coin_upbit, coin_binance, users, config, coinfollow, coinNotication, users_token, config_system } = require('../src/models');
const { getTicker, getMinCandles, getCandles, getTick, getOrderbook, getMarketList, subscribe } = upbit;

function naiveRound(num, decimalPlaces = 0) {
  var p = Math.pow(10, decimalPlaces);
  return Math.round(num * p) / p;
}

const notifyBinance = async (coin) => {
  try {
    // Lấy ra giá coin của thằng binance
    let priceKRW = await config_system.findOne({
      where: {
        code: 'KRW',
      },
    });
    let priceUSDT = await config_system.findOne({
      where: {
        code: 'USDT',
      },
    });
    let coinName = coin.code.split('-')[1];
    let checkCoinBinance = await coin_binance.findOne({
      where: {
        code: coinName,
      },
    });

    // console.log('checkCoinBinance',checkCoinBinance.type);
    if (checkCoinBinance) {
      // Tồn tại coin bên binance
      priceKRW = Number(priceKRW.value);
      priceUSDT = Number(priceUSDT.value);
      let tile = naiveRound((((coin.price * priceKRW) - (checkCoinBinance.price * priceUSDT)) / (coin.price * priceKRW)) * 100, 2);
      // Lấy ra danh sách user follow coin
      let listUserFollow = await users.findAll({
        include: [{
          model: coinfollow,
          where: { coinCode: coinName }
        }],
        where: {
          san1: 'binance',
          san2: 'upbit'
        },
      });
      // Kiểm tra xem luồng notify người dùng đã được nhận về coin
      listUserFollow.forEach(async (user) => {
        // Kiểm tra xem có token hay không
        let checkToken = await users_token.findOne({
          where: { user_id: user.id }
        });
        if (checkToken.FireBase != null) {
          // tính ra % số tiền hiện tại
          let tinhlaitile = false;
          let tileThaydoi = 0;
          if (user.KRW != null || user.USDT != null) {
            tinhlaitile = true;
            tileThaydoi = naiveRound((((coin.price * (user.KRW != null ? user.KRW : priceKRW)) - (checkCoinBinance.price * (user.USDT != null ? user.USDT : priceUSDT))) / (coin.price * (user.KRW != null ? user.KRW : priceKRW))) * 100, 2);
          } else {
            tileThaydoi = tile;
          }
          // Kiểm tra xem có đạt điều kiện x không
          if (user.x3 != null && user.x3 <= tileThaydoi) {
            // Push
          } else if (user.x2 != null && user.x2 <= tileThaydoi) {
            // Push
          } else if (user.x1 != null && user.x1 <= tileThaydoi) {
            // Push
          }
        }
        // console.log(user);
      });
      // if(){

      // }
      // console.log('listUserFollow', listUserFollow);
      // let tile = coin.trade_price  - checkCoinBinance.price / 
    }
  } catch (error) {
    console.log('error', error.message);
  }

}
notifyBinance(
  {
    code: "KRW-ETH",
    price: 2781000
  }
);
// (async () => {
//   // console.log('---------- getTicker() ----------')
//   // console.log(await getTicker());

//   // console.log('---------- getMinCandles() ----------')
//   // console.log(await getMinCandles());

//   // console.log('---------- getCandles() ----------')
//   // console.log(await getCandles());

//   // console.log('---------- getTick() ----------')
//   // console.log(await getTick());

//   // console.log('---------- getOrderbook() ----------')
//   // console.log(await getOrderbook());

//   // console.log('---------- getMarketList() ----------')
//   // console.log(await getMarketList());
//   process.env.NODE_ENV = 'develop';
//   let listCoin = await config.findOne({
//     where: {
//       key: 'upbit'
//     },
//   });
//   let CoinSub = JSON.parse(listCoin.value);
//   console.log('---------- subscribe() ----------')
//   subscribe({
//     reconnect: () => {
//       console.log('RECONNECT');
//     },
//     openCallback: () => {
//       console.log('OPENED');
//     },
//     messageCallback: (coin) => {
//       // console.log(coin);
//       try {
//         // Kiểm tra xem coin đã có chưa
//         let checkCoin = coin_upbit.findOne({
//           where: {
//             name: coin.code,
//           },
//         });
//         if (checkCoin) {
//           // Tồn tại thì update
//           if (!checkCoin.create_at) {
//             coin_upbit.update(
//               {
//                 price: coin.trade_price,
//                 create_at: moment().format("YYYY-MM-DD HH:mm:ss"),
//               },
//               { where: { name: coin.code } }
//             );
//           } else {
//             coin_upbit.update(
//               {
//                 price: coin.trade_price,
//               },
//               { where: { name: coin.code } }
//             );
//           }
//         };
//         // else {
//         //     // Thêm mới
//         //     await coin_upbit.create({
//         //         name: coin.s,
//         //         password: "7c4a8d09ca3762af61e59520943dc26494f8941b",
//         //         mobilephone: CUSTOMER_ID,
//         //       })
//         // }
//       } catch (error) {
//         throw error;
//       }
//     },
//     subscriptionList: {
//       ticker: CoinSub,
//     },
//   });
// })();
