var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的老婆",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第一个生日了",
        "在一起后的第一次见面",
        "第一次牵手",
        "第一次叫老公",
        "第一次合照,虽然拍得不怎么好",
        "我们去了鬼屋，某人害怕极了",
        "下象棋某人输了，以为我不爱她了",
        "官宣时拍的照片",
        "和某人去赣州玩，偏爱钻狗洞",
        "去绵阳找老婆，请我吃了顿大餐",
        "看了某人口中的海鸥",
        "吃了顿火锅",
        "第二次来找某人,送我的花",
        "去了圣水寺,爬了好高好高的楼梯",
        "一起看了场包场电影,虽然我希望多点人",
        "和某人一起吃的酸奶",
        "100天送某人的花",
        "给某人剪脚趾甲",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的小可爱": "./imgs/xiaokeai.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
