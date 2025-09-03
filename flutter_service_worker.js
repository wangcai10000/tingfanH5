'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f3af0cc87874826161e87ac7d42ddce7",
"version.json": "d0c33d658468191d17d8bc3571b87e29",
"index.html": "b214d90246d4a22e2943babeff80f4ac",
"/": "b214d90246d4a22e2943babeff80f4ac",
"css/welcome.css": "7ff3f8045cd3662f495eddb9cdfca27c",
"js/flutter_bootstrap.js": "674649c7e3e7c5bfcc8ed677972455a9",
"js/jquery-3.7.0.min.js": "6dc493ec57a3d5e3cb254c8bb8f4ae8c",
"js/hls.js": "5b21ed48bf6304c54c514e774835f187",
"js/jquery_cookie_1.4.1.min.js": "23d834419c7ccced820e192be7081228",
"js/push.js": "fd9b6973326a528edd4978f04900eaca",
"js/common.js": "c779d5e8bcb2e7eaee6e2cb7f2f46feb",
"js/interactive.js": "b622facaddd63dfb7b2083878c1fa51e",
"main.dart.js": "95b58e7bbe11e2da7fb796b09890ebf4",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"zh_cn/arguments/privacy/index.html": "464f85654f90213ecc63959d601c5f12",
"zh_cn/arguments/user/index.html": "051f080b10a128b5f31dafc715739581",
"zh_cn/arguments/connectUs/index.html": "6a71a0c5884cc3a963102720bdc76bdd",
"zh_cn/arguments/service_member/index.html": "549a1ac08a17e4916c37db52dc1d13d2",
"zh_cn/arguments/coinRecharge/index.html": "a7498b54d552ad17cffea9c64664b5a2",
"favicon.png": "dc49711b181e88478a047b6417c6f4d2",
"icons/icon-192.png": "1bc015416b8e5c7c726d847ca3464a5f",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/appimg/appLogo.png": "1bc015416b8e5c7c726d847ca3464a5f",
"icons/appimg/appBg.jpg": "09d3af836da07a36e52fd1c0b6abed9a",
"icons/appimg/appCont.png": "920e6c3661f2e9e08fe16905eddbe2e4",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/loading.png": "85fcb3744d1290732d26b8d54de2b70c",
"icons/icon-512.png": "f6595f84f6fb965ecba6eb1ae2ea0cb5",
"manifest.json": "0e001e2a42915118a19391fb057035ab",
"assets/shorebird.yaml": "b942de366dc8842de897ddbedf3b6397",
"assets/AssetManifest.json": "5c93ed63d842d0a42c0fe77c94777cca",
"assets/NOTICES": "75985e128a9b4f0287b1d7ed057c53a7",
"assets/FontManifest.json": "d3a26c3228678183917c04ff52d08aa7",
"assets/AssetManifest.bin.json": "99cf51d66f4935ba3a2d98c40066ee3e",
"assets/packages/client_novel/assets/images/reader/group.png": "a5973f1034b1d45fb5bce140e794077a",
"assets/packages/client_novel/assets/images/reader/moon.png": "2e79a060fc8b57ae6b6b8bdf4bd6487e",
"assets/packages/client_novel/assets/images/reader/sun.png": "8c6e7486ccb5c58355e62927070dc452",
"assets/packages/client_novel/assets/images/reader/desc.png": "13f6a206f2f6d9714064be7b6b3c40fa",
"assets/packages/client_novel/assets/images/reader/setting.png": "47f9d3a6af5aeb0c010b6a172e68cca7",
"assets/packages/client_novel/assets/images/002.jpg": "916453ff1490020a978f0d2b6ad442c3",
"assets/packages/client_novel/assets/images/003.jpg": "b9dfcd82fe0f7818e528536760832e55",
"assets/packages/client_novel/assets/images/001.jpg": "967818cd3bd346c6420d37daa0bfe4c6",
"assets/packages/client_novel/assets/images/004.jpg": "4e84e3e0f3b84b93ded0e7f975cfac3b",
"assets/packages/client_novel/assets/images/005.jpg": "3358e92098b1750ffb4cb139697fc40d",
"assets/packages/client_novel/assets/images/007.jpg": "9b8f4c134c9b0b0858f5ecb95f969e5f",
"assets/packages/client_novel/assets/images/006.jpg": "bad1907a1b54e710ca483ba47d23c671",
"assets/packages/client_novel/assets/images/common/share.png": "832f072d45627119fc58eb9f99537c1f",
"assets/packages/client_novel/assets/images/008.jpg": "b5c3781e99d2e920446a991073ee085b",
"assets/packages/client_novel/assets/books/test2.txt": "fcb4ad6abb4e7b27d795bc6f4b09ab6b",
"assets/packages/client_novel/assets/books/test.txt": "bfa6a8cbe0dec91a104b999b345df4a3",
"assets/packages/client_comic/assets/images/off.png": "215911b22af0ce6fda9e771efd128390",
"assets/packages/client_comic/assets/images/play.png": "baf29889b1678082a15ab3a932dcbc19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/client_video/assets/images/heart_check.png": "2fa963aede8139e230fd0f6df1cfc013",
"assets/packages/client_video/assets/images/collect.png": "a3ec9ebf514a5497b4601fb96ffdb9d9",
"assets/packages/client_video/assets/images/group.png": "6a448066de8a0759986878ea6dababa1",
"assets/packages/client_video/assets/images/quick_video.png": "48ce1fa3d890815ed4da5bb0b1718a67",
"assets/packages/client_video/assets/images/ranking_2.png": "4c7ce5de2553476d34a71493a7416a81",
"assets/packages/client_video/assets/images/ranking_3.png": "203e630becaf51c992438de8b8a4a1f8",
"assets/packages/client_video/assets/images/captions.png": "56a9409fcd8ad4c488c6c6f81d099311",
"assets/packages/client_video/assets/images/ranking_1.png": "60aeb2aca6773dda458b1fd8e5b946e5",
"assets/packages/client_video/assets/images/ranking_4.png": "2f6279d2bf1909139ecfa6f310b70656",
"assets/packages/client_video/assets/images/fullscreen.png": "db5386164c0d7a16c96b14ee1b164d96",
"assets/packages/client_video/assets/images/definition.png": "3e7045060788843b0d6d95c37804b54e",
"assets/packages/client_video/assets/images/heart.png": "7f5d373001bdfaf9bbdfa54180596d9b",
"assets/packages/client_video/assets/images/hots_category_US.png": "9e9d877f8c8e320bcd4807377436f1c2",
"assets/packages/client_video/assets/images/hots_category_TW.png": "0a6498d9678d89b5127252db95acb750",
"assets/packages/client_video/assets/images/comment.png": "05092d2b13f578a7e567740906577fcf",
"assets/packages/client_video/assets/images/hots_category_CN.png": "215a87fb1e8976a15e6e956f5cdcff26",
"assets/packages/client_video/assets/images/share.png": "71609411038eb2fb860811cf1f6030ca",
"assets/packages/client_video/assets/images/category_bg.png": "cf7fcbf61fc867bce335434de9049a1c",
"assets/packages/client_video/assets/images/next.png": "cb69ed51a3c4d4b3a07cf8cb4236e8b2",
"assets/packages/client_video/assets/images/hots_category_JP.png": "fda1f84c933125749a3053a66ba16c01",
"assets/packages/client_movie/assets/images/volume.png": "90d994805779407e3ecaa7bc3fb43832",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/client_fm/assets/images/change.png": "f18dd3cbe6a22bfbe62eddaaaa6deb4f",
"assets/packages/client_fm/assets/images/news/dm.svg": "84d8091901ccf08717bb771732549b32",
"assets/packages/client_fm/assets/images/news/play_on.svg": "d4a23f3c6e5da35bcdfc9eb6659438f9",
"assets/packages/client_fm/assets/images/news/speed.svg": "82f26680cb436d86151b36e47d88234e",
"assets/packages/client_fm/assets/images/news/lock.svg": "12273a7073227d7ad6556382df421836",
"assets/packages/client_fm/assets/images/news/home_module_logo2.png": "ffeb980e962b4344879d89c6a65c2ace",
"assets/packages/client_fm/assets/images/news/collect.svg": "bd2d226a72969dabbd9acda49361b8ea",
"assets/packages/client_fm/assets/images/news/pre.svg": "d8a3bee693dbafdef6b3ec19a23b8341",
"assets/packages/client_fm/assets/images/news/home_module_logo1.png": "4c9e66b55cafc8e4e25595158705243d",
"assets/packages/client_fm/assets/images/news/pre_15.svg": "2147b1aea08c84675be975ad0f12d845",
"assets/packages/client_fm/assets/images/news/choose.svg": "13896f5db6faefa039c611a083aa6bd4",
"assets/packages/client_fm/assets/images/news/dm_h.svg": "30b8d208a7f02092458b8843ceabc6c4",
"assets/packages/client_fm/assets/images/news/next_15.svg": "86f553855942ea52fcbce9bee1d3ed3d",
"assets/packages/client_fm/assets/images/news/play.svg": "0c3ca31c5886e8647954e4b3bd21825c",
"assets/packages/client_fm/assets/images/news/next.svg": "1136d92af142968752a8dc4ec39603de",
"assets/packages/client_fm/assets/images/news/collect_check.svg": "b769dc8854d2bd343c7d24ff12b28403",
"assets/packages/client_fm/assets/images/news/play_off.svg": "729a077f6e136631814b4c2c38e7055c",
"assets/packages/client_fm/assets/images/news/share.svg": "31f39d7d6c961bcdb9e6dbb3fcc5f881",
"assets/packages/client_fm/assets/images/news/comment.svg": "dda10edebcdf3e8751423ed5f5fb4bd6",
"assets/packages/client_fm/assets/images/news/pause.svg": "3859d795f0c2086d5b909cf38136a6b4",
"assets/packages/client_fm/assets/images/news/vip_drama.svg": "d2ca5d3186b4dc844c032816d7b2b949",
"assets/packages/client_fm/assets/images/play/speed_1.png": "47f9d3a6af5aeb0c010b6a172e68cca7",
"assets/packages/client_fm/assets/images/play/pre.png": "cc97c14cb8aef6c0551fa80473e11693",
"assets/packages/client_fm/assets/images/play/collect.png": "a3ec9ebf514a5497b4601fb96ffdb9d9",
"assets/packages/client_fm/assets/images/play/comment_unlike_h.png": "1edb4257ee57bc8a3d4d433e5c7860d8",
"assets/packages/client_fm/assets/images/play/danmuk_open.png": "d2211d3aa5b6a0ca4eabc01748733813",
"assets/packages/client_fm/assets/images/play/pre_speed.png": "f741c8831776a1587a18bf9c52bd11d3",
"assets/packages/client_fm/assets/images/play/sleep.png": "e6e90e0440d39344aeb1293bca90f07e",
"assets/packages/client_fm/assets/images/play/speed.png": "484cbd9264a7d6f2985797d6d60d8d3a",
"assets/packages/client_fm/assets/images/play/sequence.png": "807bd5bf5f900c7f094eecaf97f81034",
"assets/packages/client_fm/assets/images/play/comment_like_h.png": "2ef7c0e414cb26acb34adb886203e4c1",
"assets/packages/client_fm/assets/images/play/like.png": "0e260283d39a479190d7557ee326a226",
"assets/packages/client_fm/assets/images/play/comment_send.png": "ae65033bd2e62edcda582c1e9461e52b",
"assets/packages/client_fm/assets/images/play/history.png": "c5ebfdf38907b02c30f56e8aab2d0ecd",
"assets/packages/client_fm/assets/images/play/drama_group.png": "9438eec0dcdfbdb6a346b9814e81079f",
"assets/packages/client_fm/assets/images/play/random.png": "b0e9b439d38f0b905d931c6871da928a",
"assets/packages/client_fm/assets/images/play/pause.png": "b5deb85465373be590e44e5a5f79b878",
"assets/packages/client_fm/assets/images/play/drama_group_w.png": "d6d305112f1d83126fcda61c9337efac",
"assets/packages/client_fm/assets/images/play/hear.png": "a240eb59650f2e95f2de5b4253369d51",
"assets/packages/client_fm/assets/images/play/comment.png": "7f46fa0ecb38259638bda19bfc2474c9",
"assets/packages/client_fm/assets/images/play/comment_unlike.png": "68a60986ecfccf82ab78916a86245ca6",
"assets/packages/client_fm/assets/images/play/share.png": "832f072d45627119fc58eb9f99537c1f",
"assets/packages/client_fm/assets/images/play/hear_h.png": "0e00848b9138a91ebf637cc6d5dc1e76",
"assets/packages/client_fm/assets/images/play/collect_l.png": "d27e0f5bf66bf5d5731297e9c86315a6",
"assets/packages/client_fm/assets/images/play/next.png": "23f6d60e65742337089f12fe48c8c7eb",
"assets/packages/client_fm/assets/images/play/loop.png": "bd6855841e41393a39e3da76d0514226",
"assets/packages/client_fm/assets/images/play/comment_like.png": "bb5c6f0558eff4a192ce0023a4d007b6",
"assets/packages/client_fm/assets/images/play/play.png": "6eb5907ee94a2f4e3bcd9f8fe261082b",
"assets/packages/client_fm/assets/images/play/current_play.png": "4d62bc7e2e90640fbc0ae4d2d1877c66",
"assets/packages/client_fm/assets/images/play/danmuk_close.png": "ca03e7750a3c4d3c6ce5fa9dfe6aa9af",
"assets/packages/client_fm/assets/images/play/next_speed.png": "b30522408e5f281186382d6174084c38",
"assets/packages/client_fm/assets/images/play/collect_h.png": "88ec6403ea84c7061408dffbb524e9f3",
"assets/packages/client_fm/assets/images/drama/details_bg.png": "6066170a96d9b2c20cdd50805ca1c163",
"assets/packages/client_fm/assets/images/drama/vip_logo.png": "4e47251a34e25cf68f87d62560f6d228",
"assets/packages/client_fm/assets/images/drama/ranking2.png": "415a9af8709d7b3f6f3bdd4700a92338",
"assets/packages/client_fm/assets/images/drama/ranking3.png": "be5a172d714502a5c5ff0714f771d37f",
"assets/packages/client_fm/assets/images/drama/ranking1.png": "0d0f1b0ce61ba6710a14a99ed5a620f6",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/client_common/assets/images/info.png": "3ac75873356217c473aad29c8b44f06a",
"assets/packages/client_common/assets/images/pop_w.png": "041b6c7b1ab06c1a5de469885f4d1da0",
"assets/packages/client_common/assets/images/category.png": "a85352170189af9dceb523ac4da4473e",
"assets/packages/client_common/assets/images/pop_b.png": "1677459dd3bb8e1e16f8fee20c097ab0",
"assets/packages/client_common/assets/images/close_circle.png": "e35f00d91804e11bf96b400bc69fb66d",
"assets/packages/client_common/assets/images/see_h.png": "2eb9124ff289df595ca574a85e768c3a",
"assets/packages/client_common/assets/images/gift.gif": "87edaa6f983e55c1b3ef3db5515cd6a8",
"assets/packages/client_common/assets/images/load_error.png": "7ab2d13029ab75cc11dffa9e21d73967",
"assets/packages/client_common/assets/images/noty_bg.png": "99a98dff35f3b7f5ca1f6b0ea029ea82",
"assets/packages/client_common/assets/images/update_bg.png": "931b3047ff3cc19258afaf12fe45ea3e",
"assets/packages/client_common/assets/images/noty_logo.png": "09ccd38e416f24db34c928e6582a0ae6",
"assets/packages/client_common/assets/images/common_play/lock.png": "cc9085ab49501d1c63cc074bb7c61c69",
"assets/packages/client_common/assets/images/common_play/un_lock.png": "f2bd81a1ad6fcaa3df5c934f46fffe0d",
"assets/packages/client_common/assets/images/common_play/play.png": "6eb5907ee94a2f4e3bcd9f8fe261082b",
"assets/packages/client_common/assets/images/search.png": "531452e2c696925a90901a64037bfb50",
"assets/packages/client_common/assets/images/data_center.png": "62155bac4a69713be0e92f92d6a46fbf",
"assets/packages/client_common/assets/images/apple.png": "e718c87879f745345068d3809acc656c",
"assets/packages/client_common/assets/images/avatar.png": "b637addada7be449af6fb4633c9f3e8b",
"assets/packages/client_common/assets/images/movie_share_bg.jpg": "3bc8e37f76fc164a7846785e5f17d555",
"assets/packages/client_common/assets/images/news/year.svg": "5d648fb95616482e923cf12b4799d30e",
"assets/packages/client_common/assets/images/news/search_b.svg": "b46cf9fe46644a10c9c65a5c1b633dd5",
"assets/packages/client_common/assets/images/news/month.svg": "d0d5773013a24e3eb6dca158d7a96ed1",
"assets/packages/client_common/assets/images/news/next_round_grey.svg": "8ccd750c1ec36fa867edd2bcebfd90a9",
"assets/packages/client_common/assets/images/news/common_top_bg.png": "bf445945fa77e8b3b25d28c02d041bd0",
"assets/packages/client_common/assets/images/news/weeken.svg": "7bdaed7bf9ee5ba60a1ba17b1892c042",
"assets/packages/client_common/assets/images/news/share/book.png": "0ab7360664e2a32ecb07b59154c8cd0a",
"assets/packages/client_common/assets/images/news/share/bg_logo.png": "da099f2a46615a82f68f8574d9500035",
"assets/packages/client_common/assets/images/news/share/txt.png": "d141c961fbff656ea5cc93a3e60290ab",
"assets/packages/client_common/assets/images/news/share/mian.png": "f50016eb263478bbd63cad94b5c2f54d",
"assets/packages/client_common/assets/images/news/share/xiang.png": "d75df9a7151c2aa00c09c63cda51ea24",
"assets/packages/client_common/assets/images/news/share/bg.jpg": "f5e6fcb9467a7666f70d5a3f5a5ed87c",
"assets/packages/client_common/assets/images/see.png": "342e4669237dd5a6a82879d22f19f9a4",
"assets/packages/client_common/assets/images/check_box.png": "f6224d3835a0a17707eab0d9ea0b05e3",
"assets/packages/client_common/assets/images/no_dev.png": "1374e6cbe953a834c61d45453e38c230",
"assets/packages/client_common/assets/images/recharge/state_error.png": "552d11d99928c6b5e4eb079ce598aa78",
"assets/packages/client_common/assets/images/recharge/state_success.png": "2a7a55d0bb2bfdf4e9bd78bd3b33ac0e",
"assets/packages/client_common/assets/images/recharge/adv.png": "9ca24a1a3de81647fd7fed2c4f61e117",
"assets/packages/client_common/assets/images/recharge/pay_dialog_bg.png": "03796b9032c334ee8f06ce6a5f37e4ed",
"assets/packages/client_common/assets/images/recharge/moon.png": "54928ae40fcf8ff7506c34e97f03d255",
"assets/packages/client_common/assets/images/recharge/wallet_card.png": "d964907a1c2e452a0629e94e703dfd81",
"assets/packages/client_common/assets/images/recharge/vip_logo1.png": "e019b1d36c8fbf913635acd7b5c728ef",
"assets/packages/client_common/assets/images/recharge/recharge_first.png": "fedab394e9d386bef1ce2b8b74fbdd3e",
"assets/packages/client_common/assets/images/recharge/state_commit.png": "32b590227596e01e3a4a3b2e43c01544",
"assets/packages/client_common/assets/images/recharge/vip_logo2.png": "9b6c1548c6091fd5e414b16717b9ef0d",
"assets/packages/client_common/assets/images/recharge/balance.png": "f394f8ced76d9925867944df28983170",
"assets/packages/client_common/assets/images/recharge/wallet_logo1.png": "d7ced7bcf171b2dab17b727631e4e0d6",
"assets/packages/client_common/assets/images/recharge/hd.png": "a43064c7b7322b9997ce47c82e6d4254",
"assets/packages/client_common/assets/images/recharge/wallet_logo2.png": "902148341053f58ea664622641ae278f",
"assets/packages/client_common/assets/images/recharge/vip.png": "2d5ab5db01f51e5283f3e3e148e1b9d4",
"assets/packages/client_common/assets/images/recharge/star.png": "00c44e9960d7990b0311cab2403fede5",
"assets/packages/client_common/assets/images/recharge/recharge_logo.png": "4d3392c32c3bdb0917ae6d428c313f20",
"assets/packages/client_common/assets/images/recharge/premium.png": "ee5b5af4c5cfad45640ec13e8a9f132e",
"assets/packages/client_common/assets/images/recharge/vip_card.png": "712a7f250e501140f01044d8c52b928a",
"assets/packages/client_common/assets/images/recharge/free.png": "8a99ea3543428b73b62782ad718c32ff",
"assets/packages/client_common/assets/images/recharge/vip_w.png": "1557d06e55c280337a88d54d68d4e029",
"assets/packages/client_common/assets/images/file_set.png": "d67ad87ca3b4d0bccc399ce4f6ef99ef",
"assets/packages/client_common/assets/images/welfare_bg.jpeg": "2ee7760bf35b11f7519439aacf6efa8e",
"assets/packages/client_common/assets/images/pro_like.png": "84c1c01eab6e9b1c0dc65a0f1a207d28",
"assets/packages/client_common/assets/images/delete.png": "f8956eec435a9fd22deb1e1f753511e8",
"assets/packages/client_common/assets/images/edit.png": "8abe03f30d9acf62d30a005030aeaf8a",
"assets/packages/client_common/assets/images/check_box.svg": "ec49f1200f17d2b022b75a0d0a309602",
"assets/packages/client_common/assets/images/love.png": "1e822effa2a70b9c74450811a58af032",
"assets/packages/client_common/assets/images/google.png": "b4a5c10d9128cf290a0e7832cb0af1e3",
"assets/packages/client_common/assets/images/no_data.png": "009486cfc15e85d9a77418223920ed5e",
"assets/packages/client_common/assets/images/load_err.png": "336402a88932f78cf74bb89bc654f93b",
"assets/packages/client_common/assets/images/save.png": "7b32face67494692a2bf2f3d1fcdfa1b",
"assets/packages/client_common/assets/images/refresh.png": "31beb82e6f1826304ce654e31e8372b9",
"assets/packages/client_common/assets/images/share/resource/card.png": "c4b3e33e2241155084f4f73dee1b76c7",
"assets/packages/client_common/assets/images/share/resource/btn.png": "7856955992429077f1a8a28070e70bf3",
"assets/packages/client_common/assets/images/share/resource/txt.png": "50821fcc77c4164629bb740446407b90",
"assets/packages/client_common/assets/images/share/resource/bg.jpg": "9392a6b76e8fc2c3bde6e1abaf56bbe6",
"assets/packages/client_common/assets/images/share/invitation/card.png": "91fb773718dad368724499a92b26f5d1",
"assets/packages/client_common/assets/images/share/invitation/content_bg.png": "e2559a9dc8f315eaad128ad94d090320",
"assets/packages/client_common/assets/images/share/invitation/gz_bg.png": "5db0c645e9b8bd0c78496d198ead580a",
"assets/packages/client_common/assets/images/share/invitation/btn.png": "7b8a338c57247a57b25a187732e844b0",
"assets/packages/client_common/assets/images/share/invitation/txt.png": "a4709cf883c829b0061c66dc0ac376e0",
"assets/packages/client_common/assets/images/share/invitation/gz.png": "7179284c08dc0783c939762ecad611dc",
"assets/packages/client_common/assets/images/share/invitation/bg.jpg": "9433cb4e705cd9e6c8b2ef590826de9d",
"assets/packages/client_common/assets/images/check_box_h.png": "a50d5e55082d6677d9560fb7591e7fe4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5150f7155ed87264d652dfac104b7899",
"assets/fonts/MaterialIcons-Regular.otf": "9e1afdd3c719818a910ffa3585619fad",
"assets/assets/images/card.png": "154b1c6f03741e6fadb799c193cc442a",
"assets/assets/images/exchange.png": "052c38cf2388fdc760a02da8c1f75672",
"assets/assets/images/server.png": "5aa7963661eb7a38697d0ba6275b43eb",
"assets/assets/images/zhuij.png": "cce34eb9060d147d4da117d0acc4cc31",
"assets/assets/images/agent.png": "87355a915641d971035a550eda4f3690",
"assets/assets/images/vote.png": "e70dc84749d186ed86f02cb61d6ee0d5",
"assets/assets/images/collect.png": "a3ec9ebf514a5497b4601fb96ffdb9d9",
"assets/assets/images/zhuij_h.png": "861fdbbb52df9666ed9fc64596e40b67",
"assets/assets/images/rewards.png": "b0e8e3076267777b5f55eccff101720e",
"assets/assets/images/purchase.png": "24e589361a02e7f0c5c00fda60e7ee22",
"assets/assets/images/drama_h.png": "36ffbcdd028116d731ddc52a8977c8f8",
"assets/assets/images/message_h.png": "e2af4ebf995f04e03bf87e5bd685a627",
"assets/assets/images/user_avatar_top.png": "b2748b6d6a46ff9e92347aba1ddc15cd",
"assets/assets/images/home.png": "61f6f290e24489caa6e297155a3f880a",
"assets/assets/images/user.png": "5ff0dab276214073f3fa89076ff97ed2",
"assets/assets/images/user/collect.png": "6cf396e32c6c421d0087ba996a7e50c3",
"assets/assets/images/user/history.png": "e2044a642f21072c25cc198700ccf05c",
"assets/assets/images/user/next.png": "400967e3fa1e24e7ac6412bded57eadc",
"assets/assets/images/user/love.png": "b85cccb3fb89bf46d796fa9ab13318b9",
"assets/assets/images/launch_top.svg": "77b6cbc472daad34ad2de180e24875ee",
"assets/assets/images/user_h.png": "d0f0cbb2fbfa38de019a0e082eeb1bf0",
"assets/assets/images/creation.png": "794b3c304fcac2c54c6194e8acc7d7fe",
"assets/assets/images/home_h.png": "5bd9d8d77a864208f30762f6e9c744bf",
"assets/assets/images/drama.png": "a030b97e1cfa976335224ca42f827193",
"assets/assets/images/news/home_h.svg": "7730b624461af93a208d872b70fc1d20",
"assets/assets/images/news/user_h.svg": "8e4d72544bec04a82cf1a0269c137ace",
"assets/assets/images/news/user.svg": "3c4a2ce291912d372762dd7fd7918dc8",
"assets/assets/images/news/home.svg": "fe4d78e12b70ccec6d16c94ca252b696",
"assets/assets/images/news/download_app_bg.png": "8746400553e3d965806353f9f522aa2f",
"assets/assets/images/news/play_on.svg": "01c6f29c97eae17cdf63de98466a266a",
"assets/assets/images/news/service.svg": "83a18235927e9252e55ae3d4975dbe85",
"assets/assets/images/news/user_history.svg": "d389cc2f1f548b8e425034c27a7532f1",
"assets/assets/images/news/app_download.svg": "323ed2e833f6617e7dea1d4e479438d5",
"assets/assets/images/news/group.svg": "2532dbbd18f4460705bab51aa5726293",
"assets/assets/images/news/works_index.svg": "e5ff09446047d8dd5e5a00f79423dab0",
"assets/assets/images/news/user_top_logo.png": "50ed0385295b8e4a19542cc74781d7d1",
"assets/assets/images/news/home_ranking.svg": "506cd4f30dcbfc986380e976ecd831d7",
"assets/assets/images/news/avatar.png": "6a19b6ed4d4fb9002a99088ee8bd1bee",
"assets/assets/images/news/setting.svg": "5e74b103eccd9d63fc3942a05d5ec3c3",
"assets/assets/images/news/message.svg": "39d4ce6c6c866d2c442fa934bffd5363",
"assets/assets/images/news/feedback.svg": "f665f70a3276e08ba510c9239781335f",
"assets/assets/images/news/yue.svg": "c5927365246a9a3438793097835af33c",
"assets/assets/images/news/phone.png": "604812ca63b640b1e3a677cae3e753eb",
"assets/assets/images/news/user_task.svg": "c3162eb79c5bb4cb3304b13e918ebc26",
"assets/assets/images/news/home_menu_logo.png": "46d431feb673ed88fb40e2f7624742ca",
"assets/assets/images/news/update_today.svg": "a29b1c7ee89ba7dd14d2de34e406fbf4",
"assets/assets/images/news/share.svg": "c0a5bdd20212551a29bff9e335edbb08",
"assets/assets/images/news/nav_bottom_bg.png": "b9102237593a8655cfac57f647de9cb3",
"assets/assets/images/news/user_collect.svg": "303764c3763880e1af24d2ae2caaa295",
"assets/assets/images/news/next_round_right.svg": "8ccd750c1ec36fa867edd2bcebfd90a9",
"assets/assets/images/news/history.svg": "55c914ef4ef8446fce3c3de8a01fa88e",
"assets/assets/images/news/payment_online.svg": "668ffce99bc3909baaadc9fdb3e30161",
"assets/assets/images/home_bg.jpg": "83e5de9b1c1a68197808dc0c73487f39",
"assets/assets/images/task_logo.png": "11826d2cb7e3521ba7235744bd3d589b",
"assets/assets/images/app_logo.png": "f6595f84f6fb965ecba6eb1ae2ea0cb5",
"assets/assets/images/vip.png": "3b8f5198e58510eece3b8c4d9885568b",
"assets/assets/images/launch_bg.jpg": "09d3af836da07a36e52fd1c0b6abed9a",
"assets/assets/images/vote_h.png": "e7e08527c05b56269554dbcdc3692464",
"assets/assets/images/yiling.png": "2876beb62365975c82a09f28676f93ed",
"assets/assets/images/feedback.png": "5f7773afac8c64729804c043268ae8ab",
"assets/assets/images/message.png": "57b0689324619ef9ecf5c3afd8d6faef",
"assets/assets/images/setting.png": "b3e7db5a7cdf179ad993319a0d1fe6fe",
"assets/assets/images/share_ani.gif": "e7144d7cfb0b1fc6f829d8a0e0ecdc53",
"assets/assets/images/collect_h.png": "88ec6403ea84c7061408dffbb524e9f3",
"assets/assets/images/noty.png": "0090c4dad63ac05a25d00370abf251f6",
"assets/assets/font/sc.ttf": "17f5d79d72e5ccac1252ceaa319a3725",
"assets/assets/font/mq.ttf": "be893380e8b73508918a0839903784d2",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
