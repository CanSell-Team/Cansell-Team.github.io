'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b7b37f2b293c95c28b8cca0f29821c0e",
"splash/img/light-2x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/img/dark-4x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/img/light-3x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/img/dark-3x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/img/light-4x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/img/dark-2x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/img/dark-1x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/img/light-1x.png": "d41d8cd98f00b204e9800998ecf8427e",
"splash/style.css": "8ad8ccfd065a0a0bb3ed0402557c507e",
"index.html": "8096a6f7fd143608e458a2c0387b0e7f",
"/": "8096a6f7fd143608e458a2c0387b0e7f",
"firebase-message-sw.js": "9c7142f7b7779dc84def6a6cd314884c",
"main.dart.js": "53a8683e49c1878827c28009756fdfbc",
"firebase-app.js": "2aacf9b225caeab96ddaac1c892a6108",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql-wasm.js": "88a2d15fe24a12bed48ade5c89689065",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0e335ab85278c31ac5a82906c5f1ced2",
"firebase-messaging.js": "0300bb79f4a836fd6b2449fa958d592b",
"assets/AssetManifest.json": "9f8456128e97e94531fbb04478013c0f",
"assets/NOTICES": "425aed8f7bb553951b1f2c2b3b781dc2",
"assets/FontManifest.json": "468ef9c25eaf56f6fc2df0f0f5a9a229",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/anim/chat.json": "f83d015ad9effdd856e5de41c84e5121",
"assets/assets/anim/bell.json": "bcebc2cf275b2772f932fe72368fad5a",
"assets/assets/anim/maintenance.json": "51b0950afd399a22fee2e17c99dd12a9",
"assets/assets/anim/single_man_reading.json": "ce8e29e0fd56bbd226ef5b932332fb7b",
"assets/assets/anim/search.json": "654c732ad54a3f061240559fc4a4b235",
"assets/assets/anim/download.json": "5bdae5bc5cb151f542733d0cb5ec1d1b",
"assets/assets/anim/no_notifications.json": "80d6cc553c5eaa9dc4d0d83f55b88f7a",
"assets/assets/anim/done.json": "97103dd78b4dd57d5c6492efc45bba69",
"assets/assets/anim/welcome_chat.json": "5f6a6da14edd912dfea449e2195699e9",
"assets/assets/anim/splash.json": "3b8eee6b96c8bd9be69d62fcb9cb7a01",
"assets/assets/anim/sms.json": "204e1e94dae4b915ad251122d188ba4b",
"assets/assets/anim/support.json": "e8cfe184a4785c28ecfdaac93f933feb",
"assets/assets/anim/failure.json": "4b54914d9dad1c3f5c2a811673615e4d",
"assets/assets/anim/coding.json": "852ef4cfed568aadfe4c41f4a8dbb87c",
"assets/assets/images/book_pattern.png": "d91ab4ba975f4d649409257c8b22af57",
"assets/assets/images/icons_dark/search.svg": "6a864a9c30ac127a3d95832ffb7a841a",
"assets/assets/images/icons_dark/receipt.svg": "aa0948c128581baa4e246a3935f7d5f6",
"assets/assets/images/icons_dark/payment.svg": "f0bb34b39b64677e2be1d82724caae70",
"assets/assets/images/icons_dark/account_box.svg": "bfd6388e9010a6d0b53d1ee74d617ee2",
"assets/assets/images/icons_dark/no_bookmark.svg": "0aec83d1fb6ecf9027ad3b3faf11dbe5",
"assets/assets/images/icons_dark/not_interested.svg": "8bb910e36aea01163f92fcfaff1ae1e4",
"assets/assets/images/icons_dark/thumb_down.svg": "ceb8336a621c4412a105a78dfac4b960",
"assets/assets/images/icons_dark/circle.svg": "5bb6f946bc54b2cce5a4ee22cba4efa9",
"assets/assets/images/icons_dark/log_out.svg": "e0552d9cd9a942ac9c06b732c888e5b2",
"assets/assets/images/icons_dark/report_problem.svg": "d51ff4073700c7719446f68f874db455",
"assets/assets/images/icons_dark/research.svg": "ff25edf380ccd96a63f70f88541fb104",
"assets/assets/images/icons_dark/zoom_in.svg": "8705ea4470f8f7fd008899386b062aee",
"assets/assets/images/icons_dark/live_help.svg": "b2e6dbc2556a8c04a392fa90d6407ca5",
"assets/assets/images/icons_dark/build.svg": "f7c2808e72002e15bba85e1f8b79ef44",
"assets/assets/images/icons_dark/link.svg": "ca0538bfd6132e6739aadb39b8f5762e",
"assets/assets/images/icons_dark/store.svg": "afb4207cfe259ec4373dfa89c01af783",
"assets/assets/images/icons_dark/insert_photo.svg": "0f39b97d46af585d58815c5d519ff769",
"assets/assets/images/icons_dark/settings.svg": "f0a25ecc8645a7d18941afa9f243495e",
"assets/assets/images/icons_dark/assignment_turned_in.svg": "c289b417a99860c6758d49b106376dea",
"assets/assets/images/icons_dark/bookstore.svg": "886667c5d09e15fe300759af117fdd8f",
"assets/assets/images/icons_dark/book.svg": "8760511c51360d33ee01b45e6dfa611d",
"assets/assets/images/icons_dark/redeem.svg": "90b2a0ae74c8a552f6a415e1b2ea247c",
"assets/assets/images/icons_dark/forum.svg": "522abd950cb7c0ba3d7d4ed3b7866090",
"assets/assets/images/icons_dark/account_circle.svg": "8214ba8b05c84b72809c708defd5b08c",
"assets/assets/images/icons_dark/notifications_active.svg": "3a4edd5cbd053da1b107bad7b0ceb7df",
"assets/assets/images/icons_dark/account_balance_wallet.svg": "322df2f32f7161fd6db31cb0db720866",
"assets/assets/images/icons_dark/email.svg": "6dfe2b9b299899d5677c38b0b6ee8d85",
"assets/assets/images/icons_dark/crop_original.svg": "5f8116c9219b25981087a96692b35c10",
"assets/assets/images/icons_dark/import_contacts.svg": "6d82b93e70f6d34a358771cc5d5ff3a8",
"assets/assets/images/icons_dark/drafts.svg": "66f8564dbaf0aef3f707cc7032f90318",
"assets/assets/images/icons_dark/info.svg": "2498654330cbac69306def8c8da821ea",
"assets/assets/images/icons_dark/shopping_cart.svg": "64811f1b587e203c146491f269635e28",
"assets/assets/images/icons_dark/directions.svg": "216db365087ab7b7a4e30049e1958db3",
"assets/assets/images/icons_dark/check_circle.svg": "2d5d35d9203a0de39284ff426a641983",
"assets/assets/images/icons_dark/save.svg": "5ef7af8c06863dee775feaaff9f57996",
"assets/assets/images/icons_dark/back.svg": "1a4e3a86ed4f6313a9fe922581e252b0",
"assets/assets/images/icons_dark/pan_tool.svg": "812bfd85513be967e5f98d5bcaf63724",
"assets/assets/images/icons_dark/report.svg": "d933ba6faacf2a02a7130f79a988d2ce",
"assets/assets/images/icons_dark/chat.svg": "678d9cb4da6e705508f660a2a94b7514",
"assets/assets/images/icons_dark/send.svg": "0b7f12dd469bb518db70e22dd0602be8",
"assets/assets/images/icons_dark/bug_report.svg": "b312a4aa0aee769fabf9d1f8527470a9",
"assets/assets/images/icons_dark/assignment.svg": "ae755abbe6c403ee86ae728355755666",
"assets/assets/images/icons_dark/thumb_up.svg": "00ff1fefab23ef8622c4a073e2243931",
"assets/assets/images/icons_dark/notifications_none.svg": "b31d60ecb7546b6b99730763213ba4a5",
"assets/assets/images/icons_dark/edit.svg": "ad6b708f5e4c80cafbf5ae2e87ee5f1d",
"assets/assets/images/icons_dark/filter_list.svg": "418a1508fdabc58342c7b61720bb662d",
"assets/assets/images/icons_dark/attach_file.svg": "76c918aabe36e48d99ac4a4f6148282e",
"assets/assets/images/icons_dark/delete.svg": "bc6184cc37aaa012741978558f3ad383",
"assets/assets/images/icons_dark/camera_alt.svg": "0f39cc9dd0f4db219dd80eb6c67e8a3f",
"assets/assets/images/icons_dark/announcement.svg": "588e43f9bb2e0ef635a2a76f84583fdb",
"assets/assets/images/icons_dark/call.svg": "709efef074a820b7c1efabac7b1350ab",
"assets/assets/images/icons_dark/location.svg": "0a7aa98ca33bdb2bc6ac55f5a54b9d4f",
"assets/assets/images/icons_dark/share.svg": "f9d9eea770043c854e23bf5fe084786d",
"assets/assets/images/icons_dark/add_box.svg": "7a806da9b47b59c300f4ab234b9233a2",
"assets/assets/images/icons_dark/assignment_late.svg": "5e6ec8793372912925bf5ab113ce4fba",
"assets/assets/images/icons_dark/add_circle.svg": "3ff9456bd4b07733a13a836bae42bb07",
"assets/assets/images/icons_dark/error.svg": "1f5429d59ec983f7d2a93aefdfab2433",
"assets/assets/images/icons_dark/bookmark.svg": "ddf9d99b4938417849dd9e0f11ee9787",
"assets/assets/images/icons_dark/help.svg": "a870d14aaa4d026a13cac62239cf6b78",
"assets/assets/images/icons_dark/chrome_reader_mode.svg": "55f0a2571a1a04b1e3336cc419f021e1",
"assets/assets/images/icons_dark/highlight_off.svg": "e3527ea2a1573242ae7df63386eadbdf",
"assets/assets/images/icons_dark/remove_circle.svg": "16db965215a664343848a995bdd8e7f4",
"assets/assets/images/icons_dark/loyalty.svg": "6d91f86584eac2ee3a889f068b37fb50",
"assets/assets/images/icons_dark/circle_accent.svg": "6e6eb167d228006cfb058e93b3812cd3",
"assets/assets/images/icons_dark/no_filter_list.svg": "418a1508fdabc58342c7b61720bb662d",
"assets/assets/images/login.png": "46bd3cf5c9a45a766494a5d067c57904",
"assets/assets/images/loading/frame_46_delay-0.04s.png": "88b91c443214ffa82f408a05ea8536c9",
"assets/assets/images/loading/frame_83_delay-0.04s.png": "4188520eb041246334545bc06a3343d3",
"assets/assets/images/loading/frame_18_delay-0.04s.png": "af5a2e5cb52805e89fe0df27caab2619",
"assets/assets/images/loading/frame_25_delay-0.04s.png": "85e0e0e23697c93469c37eeae1e213f9",
"assets/assets/images/loading/frame_9_delay-0.04s.png": "b6369479a798c11aef5361873c1643ce",
"assets/assets/images/loading/frame_62_delay-0.04s.png": "09028bc7bf84dddae2f030fa308bf5d4",
"assets/assets/images/loading/frame_6_delay-0.04s.png": "a38904f8dd790637404defad517e4ab5",
"assets/assets/images/loading/frame_17_delay-0.04s.png": "b24ed43e425c6b67e24f91e98fe7b49c",
"assets/assets/images/loading/frame_50_delay-0.04s.png": "faa32d0b13149da105f1a268848f618a",
"assets/assets/images/loading/frame_74_delay-0.04s.png": "c30830367785ae003646eca2d42b16e6",
"assets/assets/images/loading/frame_49_delay-0.04s.png": "f9d9979df592b06ca1faee2b5b289df8",
"assets/assets/images/loading/frame_33_delay-0.04s.png": "8409afa7ffc2e21eaa26714e0dc8360c",
"assets/assets/images/loading/frame_34_delay-0.04s.png": "a5db0db8d23b889d8f0f8c87b6677b85",
"assets/assets/images/loading/frame_73_delay-0.04s.png": "89121f3a07f07cb41a6c73be3f0fd353",
"assets/assets/images/loading/frame_57_delay-0.04s.png": "23a49e25a8d0777d71cd18bb39d30e18",
"assets/assets/images/loading/frame_10_delay-0.04s.png": "a8464a348a22777b0531332ae1e27181",
"assets/assets/images/loading/frame_1_delay-0.04s.png": "c605e1e25120c8b3f3ece00c9ae5a07f",
"assets/assets/images/loading/frame_65_delay-0.04s.png": "8ab09c424f56fef3843ec1f289229389",
"assets/assets/images/loading/frame_58_delay-0.04s.png": "34b7beb669ee6c99389c4b22800807ea",
"assets/assets/images/loading/frame_22_delay-0.04s.png": "cde8bc026c5b48b27be33d98c382ed3d",
"assets/assets/images/loading/frame_84_delay-0.04s.png": "c3c54c1b0ced4618d7344dc8ac39bdf0",
"assets/assets/images/loading/frame_41_delay-0.04s.png": "ed0f022108bf1cc3943ae8ef51df2b97",
"assets/assets/images/loading/frame_72_delay-0.04s.png": "9dd30f94c5bdf8f9f93d0485ae7421f5",
"assets/assets/images/loading/frame_35_delay-0.04s.png": "f6880f5754dff963f67f9342928e06fd",
"assets/assets/images/loading/frame_11_delay-0.04s.png": "858c283d619ded176e249576c988d542",
"assets/assets/images/loading/frame_0_delay-0.04s.png": "adb7e97acdc45c4821de29712ee0fa57",
"assets/assets/images/loading/frame_56_delay-0.04s.png": "25eaeb1f2a33367bbefeb21275ee4212",
"assets/assets/images/loading/frame_23_delay-0.04s.png": "f4a2d6f6befa36faf77de35b7517e17a",
"assets/assets/images/loading/frame_85_delay-0.04s.png": "4d2c899948650938f6dc994cb8d86890",
"assets/assets/images/loading/frame_64_delay-0.04s.png": "54bacb30de76b4b5ae28504f88558fc6",
"assets/assets/images/loading/frame_59_delay-0.04s.png": "1aef6ec75cb72a7e80a5a030fbd51d61",
"assets/assets/images/loading/frame_40_delay-0.04s.png": "beb408a8d4bf00a309b017936eca2f64",
"assets/assets/images/loading/frame_47_delay-0.04s.png": "589581e717babf3af141018ee770ba0c",
"assets/assets/images/loading/frame_63_delay-0.04s.png": "24e12827c27f27d6de86d2677efd7db8",
"assets/assets/images/loading/frame_82_delay-0.04s.png": "907aa0c7199491bc828575d1de7c354f",
"assets/assets/images/loading/frame_19_delay-0.04s.png": "0e6b4bce38334ee46f9d291cc2309510",
"assets/assets/images/loading/frame_24_delay-0.04s.png": "cd2136097aa4ebb64987fe2fa1b0da11",
"assets/assets/images/loading/frame_8_delay-0.04s.png": "40a11c0b48bbbeee6aedfecf06a78a4e",
"assets/assets/images/loading/frame_51_delay-0.04s.png": "fccdb56ae81cfae33cca6367f4c6f10e",
"assets/assets/images/loading/frame_7_delay-0.04s.png": "9598f35b49810bf71cb0b8d78ac1b9ff",
"assets/assets/images/loading/frame_16_delay-0.04s.png": "7ec89786be0f34e142a6457b7c90e5cf",
"assets/assets/images/loading/frame_32_delay-0.04s.png": "3a1fbcf1e948cad93ef9a14db498f4e2",
"assets/assets/images/loading/frame_75_delay-0.04s.png": "e9f2632a0c66f5e311e5a8cfc04d8809",
"assets/assets/images/loading/frame_48_delay-0.04s.png": "1b716d18baafbf9b20a7ee50df001caa",
"assets/assets/images/loading/frame_88_delay-0.04s.png": "2b9a012d7e225b8b1dc7f0ea95434f4f",
"assets/assets/images/loading/frame_13_delay-0.04s.png": "76fcbb3454ca443d216cc948aa4e0ee3",
"assets/assets/images/loading/frame_2_delay-0.04s.png": "7e61715783ca52d0529302b60e112d18",
"assets/assets/images/loading/frame_69_delay-0.04s.png": "5aa73d1ba67bb67017b6a848d1b6961a",
"assets/assets/images/loading/frame_54_delay-0.04s.png": "ecb17d9f22ca0f75e2998b4a3857c31c",
"assets/assets/images/loading/frame_70_delay-0.04s.png": "f9c0602e928306b576566ff9f1f9bdaf",
"assets/assets/images/loading/frame_37_delay-0.04s.png": "637131b2bd12028b82ef6a32e709cd0b",
"assets/assets/images/loading/frame_91_delay-0.04s.png": "ac75dbb57555de3fe228ff21b813271b",
"assets/assets/images/loading/frame_42_delay-0.04s.png": "d8f9c1c25957da822493efe58e1d9625",
"assets/assets/images/loading/frame_38_delay-0.04s.png": "d198713d34d62f1e414b2569677a30ff",
"assets/assets/images/loading/frame_87_delay-0.04s.png": "ca31d928e0eb51cd8dbf33967002cb93",
"assets/assets/images/loading/frame_21_delay-0.04s.png": "d28d19dbc1e5be55112de94e6cc436c1",
"assets/assets/images/loading/frame_66_delay-0.04s.png": "533a632f518a580ead7c700a111f03cd",
"assets/assets/images/loading/frame_61_delay-0.04s.png": "0629fe75cf97ef8a925bbb5f8735de0e",
"assets/assets/images/loading/frame_26_delay-0.04s.png": "7a2f75c081194cc585d0cf5f5049fad7",
"assets/assets/images/loading/frame_80_delay-0.04s.png": "a43a4921360566c15995cf40f2849153",
"assets/assets/images/loading/frame_78_delay-0.04s.png": "8ba11d6577d1cf630d3109f0ec9576ef",
"assets/assets/images/loading/frame_45_delay-0.04s.png": "0d5d38ea2507cd6a9b16d56f9fbdb923",
"assets/assets/images/loading/frame_30_delay-0.04s.png": "4baea45c00de6e8422ff9900e6e75f10",
"assets/assets/images/loading/frame_77_delay-0.04s.png": "02903ca9baa0843a4b78e52528c40e05",
"assets/assets/images/loading/frame_53_delay-0.04s.png": "eb1b452db459313557ab23eec03034c0",
"assets/assets/images/loading/frame_5_delay-0.04s.png": "6280cd31a995bfc6ac359aa6747055ec",
"assets/assets/images/loading/frame_14_delay-0.04s.png": "a615236802d55d50607e0a14c2de9dc7",
"assets/assets/images/loading/frame_29_delay-0.04s.png": "312b3f6a173197d9182b3e4ea1096595",
"assets/assets/images/loading/frame_27_delay-0.04s.png": "fa1c9c03d0e491ae3be4940e5d9380ce",
"assets/assets/images/loading/frame_81_delay-0.04s.png": "f42bf41984e15fcd944619671e9725b0",
"assets/assets/images/loading/frame_60_delay-0.04s.png": "1cc59d1f2032096b80f0d2509055f409",
"assets/assets/images/loading/frame_79_delay-0.04s.png": "adf3c88683d475c972a9b7cb0e4b0c9b",
"assets/assets/images/loading/frame_44_delay-0.04s.png": "df7cb6dbb147e1cbec396ee774d2c2d8",
"assets/assets/images/loading/frame_76_delay-0.04s.png": "e162598653a6d09ba6424f5230d7c8b1",
"assets/assets/images/loading/frame_31_delay-0.04s.png": "15a8a48a5cf3148bf51e3dc191329844",
"assets/assets/images/loading/frame_4_delay-0.04s.png": "dcbedf6c9aa73ad25cc52be92bee13aa",
"assets/assets/images/loading/frame_15_delay-0.04s.png": "928f2df2e64df22d15264eb53f038f94",
"assets/assets/images/loading/frame_28_delay-0.04s.png": "8d7d24b40171f9be21478b29bb53ae07",
"assets/assets/images/loading/frame_52_delay-0.04s.png": "635eb4d64dca3b0630f5afb5348fc473",
"assets/assets/images/loading/frame_68_delay-0.04s.png": "fd8406c385790484dee41c6772f67f7f",
"assets/assets/images/loading/frame_55_delay-0.04s.png": "f342d2e8bdfdf9f9a7453a0f666c93e0",
"assets/assets/images/loading/frame_89_delay-0.04s.png": "b0404b5cb2eb0ed1107d06948f9b3368",
"assets/assets/images/loading/frame_12_delay-0.04s.png": "2dccd80dacfa177668b0393fc67b77f9",
"assets/assets/images/loading/frame_3_delay-0.04s.png": "6a60cc1b43ce42ff052093710b3ce1d3",
"assets/assets/images/loading/frame_36_delay-0.04s.png": "39a7ea378803f62fa69b6227c412b3b3",
"assets/assets/images/loading/frame_90_delay-0.04s.png": "cfb801145e9370e2c5c4f75b1617ec66",
"assets/assets/images/loading/frame_71_delay-0.04s.png": "0dc20c667e5e0477206c9cc7dfe11151",
"assets/assets/images/loading/frame_39_delay-0.04s.png": "dff3d6752d5bc32dc9d00f27416c6d3b",
"assets/assets/images/loading/frame_43_delay-0.04s.png": "5329e3b0a5cccd66b9951107fbef9bbf",
"assets/assets/images/loading/frame_67_delay-0.04s.png": "8e35a5a794a142cd6f9429f9d9b80b97",
"assets/assets/images/loading/frame_86_delay-0.04s.png": "1e650ccf95cf1ff0ce711fa85c0ccaec",
"assets/assets/images/loading/frame_20_delay-0.04s.png": "1f67b81631df0d4f50b2683be5d6055a",
"assets/assets/images/post.png": "b69050ce0904727c6ec53f5bce955a62",
"assets/assets/images/isbn_ex.png": "1958f7afd95fc018a4cd8179e8028061",
"assets/assets/images/logo.png": "0b65a7742c0616e3f64dcd190b24c1a0",
"assets/assets/images/icons/search.svg": "c1800bc7fbae9ae883ecf8827a66fa41",
"assets/assets/images/icons/receipt.svg": "3981202a282987deae24256c31e94e20",
"assets/assets/images/icons/payment.svg": "c3a7ed64498cee671d135f5a4592138e",
"assets/assets/images/icons/account_box.svg": "b9067924e0a48ae147a26514bc88d34a",
"assets/assets/images/icons/no_bookmark.svg": "71f0108078186b6718c6577f827689c3",
"assets/assets/images/icons/share_link.svg": "65892588a9c5716b632d50837c597d74",
"assets/assets/images/icons/not_interested.svg": "72c22b497760c4f2182a1c1bc6f35eb2",
"assets/assets/images/icons/time_limit.svg": "a5a7ffa31f9d233f135e7eb7fa814f5d",
"assets/assets/images/icons/thumb_down.svg": "b8e6ef93047fd344480e72c122f70fd2",
"assets/assets/images/icons/circle.svg": "6ef7ae43b585d6b743a5dde3bd2cf4b9",
"assets/assets/images/icons/empty_two.svg": "e38e68b126e39a92e319a1919b18a7fe",
"assets/assets/images/icons/user_chat.svg": "382d565abcedf295a70d49ba7ba60c2d",
"assets/assets/images/icons/library.svg": "cc6f8d25312858ab051723eb698b903c",
"assets/assets/images/icons/log_out.svg": "d4a08bb5f6de5b4652f4ab3b0d77d4d4",
"assets/assets/images/icons/report_problem.svg": "f106d050a0ebdfdfe7852015e54a0d1b",
"assets/assets/images/icons/call_center.svg": "b751a756dec28ce9b36231b7a48e24d5",
"assets/assets/images/icons/research.svg": "be35fd9eec9e0c4f3c9f323b676c3386",
"assets/assets/images/icons/zoom_in.svg": "c0666e054532b4bd6d8249ca824f522d",
"assets/assets/images/icons/book_store.svg": "c9c0ff0e7329ca1752e336f43c4c5cb3",
"assets/assets/images/icons/live_help.svg": "0ae6bd0d3aea13079500444389644b75",
"assets/assets/images/icons/build.svg": "f7c2808e72002e15bba85e1f8b79ef44",
"assets/assets/images/icons/discount.svg": "f4ac01fb80f2852b622ca2b62a020aec",
"assets/assets/images/icons/link.svg": "ee524e8eebe75237cf92bae149f3545b",
"assets/assets/images/icons/store.svg": "19a31e30db2a2ab17842e4c82a81c1ac",
"assets/assets/images/icons/insert_photo.svg": "aed3e8ae726dc58cad62254910be729f",
"assets/assets/images/icons/settings.svg": "2b022ab1000b0e45170db1f29cb8f7f5",
"assets/assets/images/icons/assignment_turned_in.svg": "de12fdb3ec88a8b56c63f4c1431ee496",
"assets/assets/images/icons/bookstore.svg": "9ce259e1c5ac423c6bed5f6df13d482f",
"assets/assets/images/icons/book.svg": "74c29ba381301e5b6e6e7b5ba63b14ef",
"assets/assets/images/icons/quit.svg": "ae2fe4742aa8c1181b66ab932f4c2025",
"assets/assets/images/icons/place.svg": "6d8cf6fe74e9b536ee1e540bde8e5e1d",
"assets/assets/images/icons/update.svg": "bbea86bc731f4f6f4f8e02666f25b512",
"assets/assets/images/icons/redeem.svg": "ec9ea7805795470c8a599781c63cb1ef",
"assets/assets/images/icons/forum.svg": "738b8a6fde79c79644d57dacbd5471cc",
"assets/assets/images/icons/account_circle.svg": "cd4069cea85412ca75ffd6a2707da3f5",
"assets/assets/images/icons/notifications_active.svg": "44ff0c37c9e6a87677f352921255e677",
"assets/assets/images/icons/account_balance_wallet.svg": "72c9fe94a0e586b7895c8ee901ae6103",
"assets/assets/images/icons/email.svg": "14e5be98489b965a62fc76614458d345",
"assets/assets/images/icons/crop_original.svg": "eee99b3038d64d85f979c246a6001adf",
"assets/assets/images/icons/import_contacts.svg": "d58cd35bb448f278d47b11dc4848f180",
"assets/assets/images/icons/drafts.svg": "8131ae047c8448618139af6fff097972",
"assets/assets/images/icons/info.svg": "a81725f7c7e98b3899d751aa719c4151",
"assets/assets/images/icons/shopping_cart.svg": "99c72c634369a76cb79f82e28826efda",
"assets/assets/images/icons/directions.svg": "d8eb74032f774eab29186f72840be82e",
"assets/assets/images/icons/check_circle.svg": "c4bcdbd8ec279aa69854a6f8197dab08",
"assets/assets/images/icons/bookmark_empty.svg": "62853e93e13b02c7a6483a741aad0625",
"assets/assets/images/icons/not_found.svg": "64c6069bb76535c79f6b5a9122f1680c",
"assets/assets/images/icons/save.svg": "b1e41707ddab5a9e6bdbafa9dcfd9d04",
"assets/assets/images/icons/withdraw_money.svg": "ccd2b1d4c5ac0e12ef4a9e5be9047f00",
"assets/assets/images/icons/add_new.svg": "6bc0d79a42dda638fe9f9b8d50ecd9f9",
"assets/assets/images/icons/back.svg": "b9f131fd319ae7a2b7ec7fa112ef830a",
"assets/assets/images/icons/pan_tool.svg": "dc25368bd5c932fe8dc8ccd27909c1b0",
"assets/assets/images/icons/report.svg": "d1dd68eff2cebeba48d67645745db92b",
"assets/assets/images/icons/chat.svg": "84f34fdf461347fe325fdda66a967a5b",
"assets/assets/images/icons/no_internet.svg": "20ce8b4289983076b4ad0465da35fa83",
"assets/assets/images/icons/send.svg": "fa98075b5d130fda94c9708b7dcaa1b2",
"assets/assets/images/icons/bug_report.svg": "deafefb23e3c71bdf9247e3c85b3af2d",
"assets/assets/images/icons/feedback.svg": "7974d9c968b7dfe58758303240480632",
"assets/assets/images/icons/no_data.svg": "a6cdeb1a5bec15eb21015a9dd8343376",
"assets/assets/images/icons/assignment.svg": "72da633735186753aa2396265aca2191",
"assets/assets/images/icons/thumb_up.svg": "09a0628853c40c19143781e2ca303288",
"assets/assets/images/icons/notifications_none.svg": "31ee936e2ab9588606b841253ae35679",
"assets/assets/images/icons/edit.svg": "6dacefa11bfa1ca92ec02c6ee122e57a",
"assets/assets/images/icons/bug.svg": "3c9595408565dd39085ea46efc9447a8",
"assets/assets/images/icons/filter_list.svg": "58edae0234083d772a9a27afd2b1f7de",
"assets/assets/images/icons/attach_file.svg": "160982b1dcda05ac8c167e10b67923f1",
"assets/assets/images/icons/upload_image.svg": "118ddc8ed940a64cfc1b726545ad0998",
"assets/assets/images/icons/delete.svg": "4009941980af76d220c1d1ddd15bd90f",
"assets/assets/images/icons/camera_alt.svg": "07b4565a6c9ffafaac3397871b3e8b86",
"assets/assets/images/icons/announcement.svg": "602cd478992f8d6e958b99ecb61a0b48",
"assets/assets/images/icons/call.svg": "81a42d41150769ca17eef86b198cbd63",
"assets/assets/images/icons/location.svg": "d9a5a0a7e072694321e9a4697fae7e20",
"assets/assets/images/icons/share.svg": "2d669d861cac4335f52ba2d582cca035",
"assets/assets/images/icons/add_box.svg": "f99aa19add10dbe9192c94d3c450c628",
"assets/assets/images/icons/rate.svg": "a041c14ed2354444732a5abd909ace26",
"assets/assets/images/icons/assignment_late.svg": "0be8e6af2cc2a520283de4c74cd28fd8",
"assets/assets/images/icons/develop.svg": "c36c1720d4c4ea0db6d18cb1a220afce",
"assets/assets/images/icons/add_circle.svg": "651b073994c4a7f6be7357b3c4bef80d",
"assets/assets/images/icons/error.svg": "15539b1304291245b754ee67b73fdf58",
"assets/assets/images/icons/bookmark.svg": "068931f41020cff3f39eceabc6d57976",
"assets/assets/images/icons/help.svg": "588791a96650e4e1c2fd870e66724ce3",
"assets/assets/images/icons/chrome_reader_mode.svg": "cbf2c71dd8d22ebd76b17ecf24509e74",
"assets/assets/images/icons/empty_one.svg": "4e472e07f5463b39dc2610656b010aaa",
"assets/assets/images/icons/highlight_off.svg": "9336690a81fcd55a08120260236de1f0",
"assets/assets/images/icons/remove_circle.svg": "aac68d44718e4923baa3b3e9e8a85318",
"assets/assets/images/icons/discount_green.svg": "5742d11b4bc22dfc60b1b5e958a0b968",
"assets/assets/images/icons/loyalty.svg": "18823b5cd6519e007a22646287550652",
"assets/assets/images/icons/circle_accent.svg": "2f24384d38a235f112b19ff7845d2d9d",
"assets/assets/images/icons/no_filter_list.svg": "6f4e43b255a5ba9fb05fd2ddc7533574",
"assets/assets/images/share.jpg": "3b41f592c964dac6fd3b374dc7bb7551",
"assets/assets/images/no_cart_dark.png": "b43e26d3ebd941e59817136db898be46",
"assets/assets/images/no_cart_light.png": "fe5d32c7c773b3675988ddb97bc0f474",
"assets/assets/fonts/vazir.ttf": "a13b8405f9588ffde203c9dccc993f40",
"sql-wasm.wasm": "8b3b3fe7c9c611db53b9e43661bf38dd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
