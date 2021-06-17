import upbit from '../src';
// const upbit = require("../dist");
// const upbit = require("../src");
const moment = require("moment");
const { coin_upbit, config } = require('../src/models');
const { getTicker, getMinCandles, getCandles, getTick, getOrderbook, getMarketList, subscribe } = upbit;

(async () => {
  // console.log('---------- getTicker() ----------')
  // console.log(await getTicker());

  // console.log('---------- getMinCandles() ----------')
  // console.log(await getMinCandles());

  // console.log('---------- getCandles() ----------')
  // console.log(await getCandles());

  // console.log('---------- getTick() ----------')
  // console.log(await getTick());

  // console.log('---------- getOrderbook() ----------')
  // console.log(await getOrderbook());

  // console.log('---------- getMarketList() ----------')
  // console.log(await getMarketList());
  process.env.NODE_ENV = 'develop';
  let listCoin = await config.findOne({
    where: {
      key: 'upbit'
    },
  });
  let CoinSub = JSON.parse(listCoin.value);
  console.log('---------- subscribe() ----------')
  subscribe({
    reconnect: () => {
      console.log('RECONNECT');
    },
    openCallback: () => {
      console.log('OPENED');
    },
    messageCallback: (coin) => {
      // console.log(coin);
      try {
        // Kiểm tra xem coin đã có chưa
        let checkCoin = coin_upbit.findOne({
          where: {
            name: coin.code,
          },
        });
        if (checkCoin) {
          // Tồn tại thì update
          if (!checkCoin.create_at) {
            coin_upbit.update(
              {
                price: coin.trade_price,
                create_at: moment().format("YYYY-MM-DD HH:mm:ss"),
              },
              { where: { name: coin.code } }
            );
          } else {
            coin_upbit.update(
              {
                price: coin.trade_price,
              },
              { where: { name: coin.code } }
            );
          }
        };
        // else {
        //     // Thêm mới
        //     await coin_upbit.create({
        //         name: coin.s,
        //         password: "7c4a8d09ca3762af61e59520943dc26494f8941b",
        //         mobilephone: CUSTOMER_ID,
        //       })
        // }
      } catch (error) {
        throw error;
      }
    },
    subscriptionList: {
      ticker: CoinSub,
    },
  });
})();
