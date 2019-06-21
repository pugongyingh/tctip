  new tctip({
    top: '20%',
    button: {
      id: 9,
      type: 'zanzhu'
    },
    list: [
      {
        type: 'alipay',
        qrImg: './images/alipay.jpg'
      }, {
        type: 'wechat',
        qrImg: './images/wechat.jpg'
      }, {
        type: 'bitcoin',
        qrContent: '1PhQySHF1ZuoRwoZ8G4CDLEtE6fAnD3GJP'
      }
    ]
  }).init()
