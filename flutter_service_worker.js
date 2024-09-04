'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "27c50602ee26642062a707db0608889d",
"version.json": "9cc96642505d653d0ad4a27737b76505",
"index.html": "5f8ba18a6752561c185bd9ac41b09e92",
"/": "5f8ba18a6752561c185bd9ac41b09e92",
"main.dart.js": "6f62dadb789aa099d9421e86f3700a0b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "af31766bad5db3a445bd02686237ac1b",
"assets/AssetManifest.json": "cc2defef4b2d7d0d2da48beb4f1e5896",
"assets/NOTICES": "e25b78e90d751a07cb9ac251c8c21d2d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "af61796acbd5984ef594fa047feb5d5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d66ef72300342cc12a328a7222635c1d",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/blue_buttons/ic_lighting.png": "38c37738118b793edfbbeb49b3141447",
"assets/assets/images/blue_buttons/ic_stylize.png": "a582ff90bac06f17f433d70860b9bd12",
"assets/assets/images/blue_buttons/ic_camera.png": "c36a74afdbf2478c110ec28a4634a94f",
"assets/assets/images/blue_buttons/ic_artist.png": "50f5b0d2e428f6def2290ba90955c918",
"assets/assets/images/blue_buttons/ic_materials.png": "6a558010621caba38a334616b18e9bef",
"assets/assets/images/blue_buttons/ic_colors.png": "51984b71eb18f6cc006f4227629d707d",
"assets/assets/images/img_info.png": "b2ac0eea87db20e7fc63a65de1c5a157",
"assets/assets/images/styles/materials/wooden.jpg": "11c5635a83653a577410581df6559b38",
"assets/assets/images/styles/materials/paper.jpg": "65265c977f67892e00b96f7d6fdbbe01",
"assets/assets/images/styles/materials/foil.jpg": "e8c4a3889b173a3423e58bb83f62314f",
"assets/assets/images/styles/materials/plastic.jpg": "758fdbd5ebc1602c98ff2d66442d7d9f",
"assets/assets/images/styles/materials/bronze.jpg": "d2cc1ac83ea491534ca0eda5a38a2c86",
"assets/assets/images/styles/materials/cotton.jpg": "bb6facd786ce857c9604c9f2c064850f",
"assets/assets/images/styles/materials/ceramic.jpg": "73640571c470bd3aa60ab3c04f430b76",
"assets/assets/images/styles/materials/sharink_wrap.jpg": "4a6e35d2c41169d83338212074935566",
"assets/assets/images/styles/materials/nickel.jpg": "2ee47410f50ab1a37a4ebf8138713c02",
"assets/assets/images/styles/materials/aluminum.jpg": "e5ef5dd49673ca477f53a8d95fbfd58b",
"assets/assets/images/styles/materials/nylon.jpg": "f077e5059e19b2f14b8cd6d82f7bd78f",
"assets/assets/images/styles/materials/leather.jpg": "cc4e8b38990169b520faa32cf69978c8",
"assets/assets/images/styles/materials/fabric.jpg": "2f31ea7cc92d5c56e7c0c626a011090e",
"assets/assets/images/styles/materials/skin.jpg": "c1f4ffdb10d1e3724da401007737d5a0",
"assets/assets/images/styles/materials/quartz.jpg": "5a8940ebad42071e5181527ec5f3b3e9",
"assets/assets/images/styles/materials/cardboard.jpg": "1e2d6d30ea16dbea8ffb8bb656a4ec9d",
"assets/assets/images/styles/materials/yarn.jpg": "ee2f6e27f1327e5eb381ed5b8e692554",
"assets/assets/images/styles/materials/gold.jpg": "664d1adc2a97173a7d947c0dcae6b56b",
"assets/assets/images/styles/materials/brick.jpg": "0871ba6f7a572693fe1bb95386082183",
"assets/assets/images/styles/camera/magnification.jpg": "2448f9189270f1966a90b660a405aec5",
"assets/assets/images/styles/camera/macro_lens.jpg": "de139e333f675e51336b503a62d75553",
"assets/assets/images/styles/camera/wide_angle_lens.jpg": "b9067a60e4a487eb21fa489660a1c79f",
"assets/assets/images/styles/camera/dslr.jpg": "373e44cc9d834c1ef142722b6e316380",
"assets/assets/images/styles/camera/miniature_faking.jpg": "1ee5d5ef54cb5e1c9a9a200f90b1e5c5",
"assets/assets/images/styles/camera/pinhole_lens.jpg": "e95b985c326002bf60f5318e820e3d84",
"assets/assets/images/styles/camera/panorama.jpg": "12857150d289320ce37b6d6c87f8ed74",
"assets/assets/images/styles/camera/microscopy.jpg": "06758c4d734af0962ad2cb6b9eb7e948",
"assets/assets/images/styles/camera/telephoto_lens.jpg": "40ed8cc45c3a0de959e3198fe89c7b25",
"assets/assets/images/styles/camera/ultra_wide_angle_lens.jpg": "684292e28927d09a95b1ad333be092a0",
"assets/assets/images/styles/camera/satellite_Imagery.jpg": "d774760865ac908c2a9b8dbf9b03761a",
"assets/assets/images/styles/camera/super_resolution_microscopy.jpg": "fcfd07171c42fa66d2ce1bab9e9fb35d",
"assets/assets/images/styles/camera/360_panorama.jpg": "799eb43da49b67d8c73e2ef19996e192",
"assets/assets/images/styles/camera/telescope_lens.jpg": "288d7201144420b64567c6ad42645098",
"assets/assets/images/styles/camera/electron_microscope.jpg": "47a5dfa564eeb0b3a1c24fb50f7420a7",
"assets/assets/images/styles/styles/molecular.jpg": "7757e60b80829eb507335f3af8a960de",
"assets/assets/images/styles/styles/futuristic.jpg": "5c1446df22d21b3c4850def507ff96cd",
"assets/assets/images/styles/styles/ice_age.jpg": "245ca62ae48d1ae25ffe799cffb9d79a",
"assets/assets/images/styles/styles/graffitti.jpg": "235db1b57b3a0390f0228fd9c594cfe1",
"assets/assets/images/styles/styles/flower_of_life.jpg": "b86cead456a030e8a627ad6116842440",
"assets/assets/images/styles/styles/nebula.jpg": "c56270a6db0eef9ccd2022d8dac25d99",
"assets/assets/images/styles/styles/helix.jpg": "0372f7c7715cc8c9b274b04ddbdbb141",
"assets/assets/images/styles/styles/deep_sea.jpg": "25835be7b5b2465bf284cee88bbcd274",
"assets/assets/images/styles/styles/comicbook.jpg": "e2dff2eb7407680fc921d0efc626f59b",
"assets/assets/images/styles/styles/liquid.jpg": "42571555bfd395abc80013ef500d7e92",
"assets/assets/images/styles/styles/sacred_geometry.jpg": "580e0ba4e9c43543eb8c342844daacbb",
"assets/assets/images/styles/styles/street_art.jpg": "83aa98a9fc3fba0149e23f7a2037fb24",
"assets/assets/images/styles/styles/dna.jpg": "5629922ce0a091774670a70cb13d6f57",
"assets/assets/images/styles/styles/pastel.jpg": "eab85f6bff481c98e0f798784aea4a7d",
"assets/assets/images/styles/styles/extraterrestrial.jpg": "1abdbd71f8dd407d1c8896d1850bcc6d",
"assets/assets/images/styles/styles/surreal.jpg": "bf03ecfe430da2a1e9433796f88809a5",
"assets/assets/images/styles/styles/realistic.jpg": "1ff2c55d8e41cf482f1d3059016a1505",
"assets/assets/images/styles/styles/retro.jpg": "fcfc202a1d6bdd00ebd1ffb128a932cc",
"assets/assets/images/styles/styles/oil_painting.jpg": "ab26f5a5699babd3fe8a3ca48fec4855",
"assets/assets/images/styles/styles/space.jpg": "d74913141bf636142d04ad3d3d5e1e17",
"assets/assets/images/styles/styles/comicbook_drawing.jpg": "b552db28c0a5e6cf7690f1451119144d",
"assets/assets/images/styles/styles/electronic_circuitry.jpg": "4de98daec3c198364f2e9ed4501f2dd3",
"assets/assets/images/styles/styles/tron.jpg": "56ef0ccc227dfd80dc07307dab1ac4a1",
"assets/assets/images/styles/styles/concept_art.jpg": "57d9feb2c95850b19b81eefb94914c5d",
"assets/assets/images/styles/styles/da_vinci_drawing.jpg": "c313df9346487b7c4cde5552822dc67e",
"assets/assets/images/styles/styles/jurassic.jpg": "292bd0878f538df8ad820bb52f99aa3a",
"assets/assets/images/styles/styles/cyberpunk.jpg": "b980da45438bd0dc663fd97e7d0c4954",
"assets/assets/images/styles/styles/diabolic.jpg": "b8e0b318dd6fa697f7f42710f247c899",
"assets/assets/images/styles/styles/metallic.jpg": "207b544b72018a18916dc7e8ec5bf43a",
"assets/assets/images/styles/styles/gasoline.jpg": "5835a00743b7433555ea850e5cf938c1",
"assets/assets/images/styles/styles/arabic.jpg": "1d9588d188fb839302c5acb8fd40a2d7",
"assets/assets/images/styles/styles/celestial.jpg": "2a63fd8c05473dc6ef7a070abff274ca",
"assets/assets/images/styles/styles/renaissance.jpg": "c3b9d25a6935f68bbf9e648151fe71a4",
"assets/assets/images/styles/styles/hell.png": "da0e359102dda76b1fe2755c86ce31e3",
"assets/assets/images/styles/styles/merkaba.jpg": "7c8a5ee5c514ba81e07014b170184c79",
"assets/assets/images/styles/styles/pixelart.jpg": "b64e5515856803e140b4a5d8f87925b5",
"assets/assets/images/styles/styles/gummies.jpg": "8036909cc7ed1f28ba69eef7b91bcfbf",
"assets/assets/images/styles/styles/spray_paint.jpg": "f37e475df6a3a1292bf9ff2ed7a5c92f",
"assets/assets/images/styles/styles/galactic.jpg": "fd0096c0cb05a483a97b78dff2cd8fc4",
"assets/assets/images/styles/styles/8_bit.jpg": "8698c6786d071591f0fe3d9e9e5eddda",
"assets/assets/images/styles/styles/amber.jpg": "53864ff2e3d302c4819344bc2e8f0492",
"assets/assets/images/styles/styles/slime.jpg": "ab9755712fd4974e85a569a287951b10",
"assets/assets/images/styles/styles/quasar.jpg": "ba72891ee0799b7eee94496aa25bed46",
"assets/assets/images/styles/styles/black_hole.jpg": "a77d0cf91bc7ab47cc15521e859a56d3",
"assets/assets/images/styles/styles/da_vinci.jpg": "4431de1e8c69e82abe46ee478d98e8e8",
"assets/assets/images/styles/styles/mitochondria.jpg": "a61fcf9dd3ed19f96df776bff2fd8da4",
"assets/assets/images/styles/styles/carbon_fiber.jpg": "f5f29900884fbb283904bbc2dcdae7e9",
"assets/assets/images/styles/styles/electrical.jpg": "5160a168ff629596034faea887e6bdfc",
"assets/assets/images/styles/styles/magma.jpg": "c3092613b36a8863d7f40ed3692d3148",
"assets/assets/images/styles/styles/fiber_optic.jpg": "e4528b1fbd1a349a149dcf6931b9c982",
"assets/assets/images/styles/styles/fossil.jpg": "7d18bc50ae7dde3e2ae7fe10adc61039",
"assets/assets/images/styles/styles/lsd.jpg": "96245a73120685802aa27c4edd94c6ac",
"assets/assets/images/styles/styles/ray_tracing.jpg": "60c706affd9e5197f12dd4b29e9c4095",
"assets/assets/images/styles/styles/anatomical_drawing.jpg": "4b64c880d70df5d82385018ea322640b",
"assets/assets/images/styles/styles/kaleidoscope.jpg": "53a33b5dcf4debdf09ba3934bdd4ae56",
"assets/assets/images/styles/styles/dots.jpg": "cc8b97e4242ae1cb45c7a43c625e60a5",
"assets/assets/images/styles/styles/technological.jpg": "f2bf93a5ae74026f527f8beb77640133",
"assets/assets/images/styles/styles/prokaryotic.jpg": "7cf1c92a8b99462822430fe458e7f6ed",
"assets/assets/images/styles/styles/wind.jpg": "041e46f7b5448b5cb8ee94b5969748ba",
"assets/assets/images/styles/styles/icy.jpg": "2c8ef7d1cc2c303d60e0827319b82621",
"assets/assets/images/styles/styles/orbital.jpg": "06380b249a8d34f387c896da5c2ad501",
"assets/assets/images/styles/styles/dripping_paint.jpg": "f17e9368d592ad7f10a05d835acd504c",
"assets/assets/images/styles/styles/risograph.jpg": "fe2e4d47bdd63eb3e02da542b9b8d379",
"assets/assets/images/styles/styles/lightspeed.jpg": "e292773afa47f501e195f82b7795eae9",
"assets/assets/images/styles/styles/nuclear.jpg": "cf0a1acae62c5e609b48f85be0596d88",
"assets/assets/images/styles/styles/gouache.jpg": "44b6e0f63b5d0e8b20a163b44491c307",
"assets/assets/images/styles/styles/sketch_drawing.jpg": "ed272cc7c98de493ccd4fbaac7903c5c",
"assets/assets/images/styles/styles/floral.jpg": "3dd6ed1e0aae001059b1433dbca1eabe",
"assets/assets/images/styles/styles/caribbean.jpg": "1fc81cd6ff68b2c2d671321cdfde682b",
"assets/assets/images/styles/styles/ultra_modern.jpg": "1d440bb84ec5a113be90069ddb05671a",
"assets/assets/images/styles/styles/16_bit.jpg": "926c05a6560955d4f21e2cf5374a63f4",
"assets/assets/images/styles/styles/symmetric.jpg": "7e973e84857f373e1ec6f57033f80941",
"assets/assets/images/styles/styles/knitted.jpg": "f83d4885b6d2b8eef7d956953dcbba28",
"assets/assets/images/styles/styles/glass_blowing.jpg": "b3a30af2f8d26dd778bd634668042647",
"assets/assets/images/styles/styles/dark_matter.jpg": "5a50131d4dc8ac22ad962b0c79ef62be",
"assets/assets/images/styles/styles/blueprint_drawing.jpg": "bbb60f4bfd061cfff2284bacb7aba0ec",
"assets/assets/images/styles/styles/nasa.jpg": "91610babcd100ec85bdabcef38dae4e1",
"assets/assets/images/styles/styles/matter.jpg": "cc7322719f954e76644e5b8a11fba5d6",
"assets/assets/images/styles/styles/fibonacci.jpg": "0c7b3796ec8dbc4c12e6860099ccd5a7",
"assets/assets/images/styles/styles/logo.jpg": "83ab204be342743c91f9adf1f70cd99a",
"assets/assets/images/styles/styles/charcoal_style.jpg": "4ced86b2baa4c024b35334c02f9eed8b",
"assets/assets/images/styles/styles/squiggles.jpg": "5a0f23dcb59e31b0b19081097ffc5b01",
"assets/assets/images/styles/styles/veins.jpg": "447cd8a0210266ad2d53896586815d58",
"assets/assets/images/styles/styles/diffraction_grading.jpg": "a94349691469a4f7786059813b9a9bb7",
"assets/assets/images/styles/styles/1980s.jpg": "353c60c843baec49cc67aec4dcc305fe",
"assets/assets/images/styles/styles/cartoon.jpg": "032d93b1f1260703beb97a1695696aaa",
"assets/assets/images/styles/styles/old_photograph.jpg": "8b322e4748836bdf679dceae1129d758",
"assets/assets/images/styles/styles/carved_lacquer.jpg": "380f10f6065f3b945d9b0bc1aef2f5bd",
"assets/assets/images/styles/styles/ultrasonic.jpg": "b3f816903a134a46e8501fa60c9b17c7",
"assets/assets/images/styles/styles/polka.jpg": "3d84d707d844ff20d1f4093b85d213af",
"assets/assets/images/styles/styles/glitchart.jpg": "b1738f32509b0ced98ebd61e8a9abdb3",
"assets/assets/images/styles/styles/radioactive.jpg": "4131a3a70dcfef22d97023d58ec296b4",
"assets/assets/images/styles/styles/multidimensional.jpg": "c5a538c26789b470e23f03294d9c94df",
"assets/assets/images/styles/styles/4_bit.jpg": "9fc21010e20ea5c738c6f8fd8d0ceee2",
"assets/assets/images/styles/styles/dune.jpg": "1a4deb62238c3c2021d6e210b28ae499",
"assets/assets/images/styles/styles/cellulose.jpg": "67fdf555e9b875a4358f639100ab1fb4",
"assets/assets/images/styles/styles/fractal.jpg": "9ec0b31dd6141c33e8eb73f93979d343",
"assets/assets/images/styles/styles/ancient.jpg": "590d5b21d649e90b17034bdb95ea23c0",
"assets/assets/images/styles/styles/tropical.jpg": "1730a25fd840a497edfbb2f9e112075d",
"assets/assets/images/styles/styles/pre_historic.jpg": "e832e22702265c9fa4a611831df1e079",
"assets/assets/images/styles/styles/volcanic.jpg": "cd484edcd007e76346add3bf28fbd967",
"assets/assets/images/styles/styles/synthwave.jpg": "b92db4ba10d665c6e2a000ee7fe8f23b",
"assets/assets/images/styles/styles/dangerous.jpg": "91063b2aaf3baaf87a07b3150b4b5895",
"assets/assets/images/styles/styles/photorealistic.jpg": "2eaa9f97cf7d882d9045607a998d07a1",
"assets/assets/images/styles/styles/antimatter.jpg": "de0b0b907332d93c31c7dfa5c21fe706",
"assets/assets/images/styles/styles/blocky.jpg": "b9193c28130a869d0913a676cfdddd12",
"assets/assets/images/styles/styles/splatter_paint.jpg": "a0d6654a10dc4655c22cfcc2ffc28752",
"assets/assets/images/styles/styles/etching.jpg": "4f91b3a95b2641fe2395a896a3d5f84b",
"assets/assets/images/styles/styles/ornamental.jpg": "907aeb5f3d70a967de480fb939b13dc1",
"assets/assets/images/styles/styles/coral.jpg": "1c031603701617167fd95fd84711f8fc",
"assets/assets/images/styles/styles/glass.jpg": "034ba36c85cfb506aeee5b80f9178fe6",
"assets/assets/images/styles/styles/graphic_novel.jpg": "be87b97bcce4e349519bc47064a09bdc",
"assets/assets/images/styles/styles/%25D1%2581omputer_%25D1%2581hip.jpg": "c8a5a171dfefeca1f48a2300d2daa07e",
"assets/assets/images/styles/styles/chromatic.jpg": "6714bfdaed29d30a841b40b546c43a4d",
"assets/assets/images/styles/styles/love.jpg": "9f8d3feed51c2bc3eaaf765636356034",
"assets/assets/images/styles/styles/wet_paint.jpg": "49e9821c47ec307b6866723812863dba",
"assets/assets/images/styles/styles/higgs_boson.jpg": "adfd7da6e8533ac478a3714552601cb5",
"assets/assets/images/styles/styles/marble_statue.jpg": "0f7661adcdae48b400778c53727376d8",
"assets/assets/images/styles/styles/wild_west.jpg": "11507cec04045b049ce6384c8bda48af",
"assets/assets/images/styles/styles/stranger_things.jpg": "8515b45e5dc4919a5f3fd2d9a93543e0",
"assets/assets/images/styles/styles/wrinkled.jpg": "884a03634bebdbffc27b77084ed4244c",
"assets/assets/images/styles/styles/horror.jpg": "35afa9e74a22ef0cd61b3bd44d9a9844",
"assets/assets/images/styles/styles/neon.jpg": "844ccb5ebf7a294eddd785a99ce2f256",
"assets/assets/images/styles/styles/wormhole.jpg": "fad35652598cd4b7463b31c2979e1835",
"assets/assets/images/styles/styles/latex.jpg": "2f2f93e08bc08f8be70a23cdeccd3400",
"assets/assets/images/styles/styles/origami.jpg": "c29b159051af89da65316d9637b8b42b",
"assets/assets/images/styles/styles/anime.jpg": "086968273a701db45eb8ea3616bea69d",
"assets/assets/images/styles/styles/stitching.jpg": "eff2c05c49db914a3460b6ced51cd78f",
"assets/assets/images/styles/styles/mandala.jpg": "8f8ab1c6c3743d5e3a08076d74dd9b75",
"assets/assets/images/styles/styles/1800s.jpg": "8fc79174c029d6f6bffaea1d97ce760a",
"assets/assets/images/styles/colors/neon_blue_color.jpg": "079adec939a600c6fe5f3c15928643e2",
"assets/assets/images/styles/colors/teal.jpg": "f966ed0bd4be04fb381500f0a275fa54",
"assets/assets/images/styles/colors/neon_green_color.jpg": "a7f0c971a4ebbcf1a014f96d11d4c4ad",
"assets/assets/images/styles/colors/baby_pink_color.jpg": "97a03675627142474ec02148d9095cd0",
"assets/assets/images/styles/colors/rgb.jpg": "675877a3fa4a37b539c78a8336d54005",
"assets/assets/images/styles/colors/neon_red_color.jpg": "a7ddfb8ca81eacb8d56c9f620a3579a0",
"assets/assets/images/styles/colors/matte_black_color.jpg": "23731f120510bacc45df23955f7ab7b4",
"assets/assets/images/styles/colors/gray.jpg": "22b07c4f033fd8906fd5958d0823989d",
"assets/assets/images/styles/colors/beige.jpg": "f0ac18ec09823353e9e949fbdce04a5b",
"assets/assets/images/styles/colors/brown_color.jpg": "61a19f417bd0d87c5eb3a9b8bfad2cee",
"assets/assets/images/styles/colors/yellow.jpg": "1d69a727fc163594e4e846c3b2d3de33",
"assets/assets/images/styles/colors/gold_color.jpg": "867be617099dcd76b787d2308ab2e3a3",
"assets/assets/images/styles/colors/vermillion.jpg": "ef3e6ce89822f05590e193422c24e280",
"assets/assets/images/styles/colors/neon_yellow_color.jpg": "63e5c16728714782aadb87474e5108f8",
"assets/assets/images/styles/colors/pink.jpg": "a017d44fc5613de632da69cc63da414a",
"assets/assets/images/styles/colors/blue.jpg": "bcb9c102877bfb3b911970f655b3931a",
"assets/assets/images/styles/colors/neon_purple_color.jpg": "0a588c89d124edf71ea3d9d0bb6f5f75",
"assets/assets/images/styles/colors/silver_color.jpg": "e23245f8894bf8188d2f19613ea056d1",
"assets/assets/images/styles/colors/grayscale_color.jpg": "fb2ecdea7c9b47256c441350483b8af1",
"assets/assets/images/styles/colors/orange.jpg": "9c8c469169ff1ce18229ff6ef3f1ea26",
"assets/assets/images/styles/colors/violet.jpg": "fa31d6118157181bff9009daca7e2d32",
"assets/assets/images/styles/colors/green.jpg": "e42de06890f2d94fe4e8bd854a33d2c3",
"assets/assets/images/styles/colors/indigo.jpg": "1505ab31dbb45e5abf2a53556602c907",
"assets/assets/images/styles/colors/turquoise.jpg": "a4802274a984acb355c50f56814f949e",
"assets/assets/images/styles/colors/baby_blue_color.jpg": "041a9d03fcb0f168f952e8803a6afa66",
"assets/assets/images/styles/colors/hot_pink_color.jpg": "bb69f094288eb298c30adac175441909",
"assets/assets/images/styles/colors/cyan.jpg": "1a96aead8727ae7b8e5c31bdff91f71c",
"assets/assets/images/styles/colors/coquelicot_color.jpg": "aeb7b0308184227c14f71a3ecfc6286c",
"assets/assets/images/styles/colors/lavender_color.jpg": "c1889c5c7ade7c02de4a8ff2bee36665",
"assets/assets/images/styles/colors/mint_color.jpg": "bcb82da6dc428ab3da7a8e4dbd8aef40",
"assets/assets/images/styles/colors/navy_blue.jpg": "6c88d4c9137dcab1769de3bd7f58da99",
"assets/assets/images/styles/colors/cymk.jpg": "1e39de93fb497f30539b427d91f40797",
"assets/assets/images/styles/colors/magenta.jpg": "cd3f12e006ae01fa452a82b30bc719f4",
"assets/assets/images/styles/colors/neon_orange_color.jpg": "3afa915dc1525a44dfc5c7a349446d45",
"assets/assets/images/styles/colors/white.jpg": "fdcbc80eae6c48f175760efcfacc1519",
"assets/assets/images/styles/colors/citrus.jpg": "89a0d89b0f5a5dc9cd6492f71707e413",
"assets/assets/images/styles/colors/red.jpg": "e6d4f6f2caefe69c5854d175f91617e4",
"assets/assets/images/styles/lighting/neon_lamp.jpg": "7289a0b09842abb5720ad075fb2a8f1f",
"assets/assets/images/styles/lighting/moonlight.jpg": "7c942c663b092472c236085bacbe6b2c",
"assets/assets/images/styles/lighting/nuclear_waste_glow.jpg": "884d564c096fc11bfc48c1d63e9c9f13",
"assets/assets/images/styles/lighting/glowing.jpg": "61b23b12ed08df0f39e3cf1e59ef793c",
"assets/assets/images/styles/lighting/direct_sunlight.jpg": "5a13c11666e5c77fbfc5d71526db0233",
"assets/assets/images/styles/lighting/glowstick.jpg": "fedab89aa6fb196a9cdff1edb3676762",
"assets/assets/images/styles/lighting/ultraviolet.jpg": "7b3f5d11b55951562f932c98238fc197",
"assets/assets/images/styles/lighting/candlelight.jpg": "c844b74ad607e2607c98344b0a3cde64",
"assets/assets/images/styles/lighting/edison_bulb.jpg": "a78ded91e020fac218eca3dbec9260d6",
"assets/assets/images/styles/lighting/backlight.jpg": "b2d33365f60f7929b3d5e02fcda0865e",
"assets/assets/images/styles/lighting/fire.jpg": "85f792b33011c88609c9f94c9f17daa1",
"assets/assets/images/styles/lighting/electric_arc.jpg": "235a557277b378b6df76b2c8f773a243",
"assets/assets/images/styles/lighting/concert_lighting.jpg": "278d2180ac963a1b0b46451c00c5373d",
"assets/assets/images/styles/lighting/natural_lighting.jpg": "5f32a455b31ad9291d6e682b567b63a5",
"assets/assets/images/styles/lighting/lava_glow.jpg": "905f6d51127df9fb465a33876951ad82",
"assets/assets/images/styles/lighting/blinding_light.jpg": "c67568b5348cc1a33d2c352512b90592",
"assets/assets/images/styles/lighting/crepuscular_rays.jpg": "822c1b5c79abfc0f0835e26a33c5e9e0",
"assets/assets/images/styles/lighting/quantum_dot_display.jpg": "560d36ef25f73e1f02e576433572cf40",
"assets/assets/images/styles/lighting/fluorescent.jpg": "238d740b46c7554c1c973f51d5a49cec",
"assets/assets/images/styles/lighting/strobe.jpg": "8e8f0e7fe0e468be936468f02028192e",
"assets/assets/images/styles/lighting/sunlight.jpg": "2e59c000274e55bf4b489c7401f03457",
"assets/assets/images/styles/lighting/dusk.jpg": "cebdaae44644608f26448fa9d6c2c87f",
"assets/assets/images/styles/lighting/accent_lighting.jpg": "a8f1928cc7cb154f4977ee3b1c8258a4",
"assets/assets/images/styles/lighting/glowing_radioactively.jpg": "309a70ad8af1013bbaf1934e0b3e2421",
"assets/assets/images/styles/lighting/blacklight.jpg": "c80b21c9121172031f283a19ead88dc6",
"assets/assets/images/styles/lighting/spotlight.jpg": "ec51a50eb70e7226d300cb7910007e7e",
"assets/assets/images/styles/lighting/nightclub_lighting.jpg": "d4caf9f6deff6664eb4cd357c92f8f11",
"assets/assets/images/styles/artists/art_by_yoko_ono.jpg": "df10af279ca9fbc0686d43c2e3d9b7d3",
"assets/assets/images/styles/artists/edgar_degas.jpg": "0244df73abb09f598c4f283763677d30",
"assets/assets/images/styles/artists/andy_warhol.jpg": "e0dfb0fdda5ef2844b015a8d80976472",
"assets/assets/images/styles/artists/mark_rothko.jpg": "2eb7fcd3d7486cf703ab042717960114",
"assets/assets/images/styles/artists/marcel_duchamp.jpg": "819fdb85871f33dd834b9bbe03123fd4",
"assets/assets/images/styles/artists/jackson_pollock.jpg": "d5ce5dd67113b98c75f8d6f9cc4812bf",
"assets/assets/images/styles/artists/rembrandt.jpg": "718a8aba5679de4ebcd1e38003fcda46",
"assets/assets/images/styles/artists/eugene_delacroix.jpg": "baa340cc3c98babf56eb415373cce4d1",
"assets/assets/images/styles/artists/sandro_botticelli.jpg": "5e707e439aaae57c08eb1db789c1960d",
"assets/assets/images/styles/artists/gustav_klimt.jpg": "3a123bf01d2bf3745f906449744abef0",
"assets/assets/images/styles/artists/marc_chagall.jpg": "d149b6f35195134479303a77130a210e",
"assets/assets/images/styles/artists/piet_mondrian.jpg": "6e5fd53a17dc0ac939fd689dc5acb416",
"assets/assets/images/styles/artists/yoji_shinkawa.jpg": "f5bac2edee87409b4fbd8ea9d5982f8c",
"assets/assets/images/styles/artists/van_gogh.jpg": "f54900e3a06cff6f2cfcab2d3c003425",
"assets/assets/images/styles/artists/david_hockney.jpg": "51d056abd902e9d72c9e8871b51024a9",
"assets/assets/images/styles/artists/monet.jpg": "cbe1fba5bc13eaa4764bb2af1a2939f7",
"assets/assets/images/styles/artists/caravaggio.jpg": "ad7ebe4265dce1e68b2c3890a2df65b1",
"assets/assets/images/styles/artists/jmw_turner.png": "da0e359102dda76b1fe2755c86ce31e3",
"assets/assets/images/styles/artists/banksy.jpg": "55dad995e88c0a4708318d378ea67e08",
"assets/assets/images/styles/artists/alphonse_mucha.jpg": "c32d1d6a624785766410ad043e05ff62",
"assets/assets/images/styles/artists/jean_michel_basquiat.jpg": "ecb8dd789eb3db4f5a0d1f342aec3020",
"assets/assets/images/styles/artists/michelangelo.jpg": "7a2bbaa39e646e4a9c1bdfcca033a17e",
"assets/assets/images/styles/artists/johannes_vermeer.jpg": "e2d0b381fa237a28886b91bed59bea9f",
"assets/assets/images/styles/artists/garald_brom.jpg": "ba090b79e845c74e2f6855486245315f",
"assets/assets/images/styles/artists/rene_magritte.jpg": "0d930cc35c38a9d77386e727a26de3ae",
"assets/assets/images/styles/artists/by_francisco_de_goya.jpg": "a3f9eff3c88cc31a3b8e9cc809f07e96",
"assets/assets/images/styles/artists/paul_gauguin.jpg": "9fbb915a8a730e7ca2563f6d83634969",
"assets/assets/images/styles/artists/takashi_murakami.jpg": "5ae559b523816fcf848d41fb9add6faf",
"assets/assets/images/styles/artists/paul_cezanne.jpg": "acb9c2d40eb3c9a4676b83ff4dd952dc",
"assets/assets/images/styles/artists/picasso.jpg": "a0c8c179872a39f550b9258e3ada410a",
"assets/assets/images/styles/artists/roy_lichtenstein.jpg": "f1a2a5bed31305520f00205cec86aa0c",
"assets/assets/images/styles/artists/leonardo_da_vinci.jpg": "cfffa9468ada17a663b6fd77856f8189",
"assets/assets/images/styles/artists/pierre_auguste_renoir.jpg": "35ef55b369146d0c61ea4b4498972216",
"assets/assets/images/styles/artists/wassily_handinsky.jpg": "d202251640b21b07e095a110c7a212f7",
"assets/assets/images/styles/artists/henri_matisse.jpg": "642eec695d26ec86f260d679b65ac81f",
"assets/assets/images/styles/artists/salvador_dali.jpg": "0628a09b9d24987e8b7374d51b630b3c",
"assets/assets/images/styles/artists/francis_bacon.jpg": "7da7f64ed20da620035fe08d75aaaebe",
"assets/assets/images/styles/artists/diego_rivera.jpg": "654df3c9924083a946d6f6050db0803d",
"assets/assets/images/styles/artists/yayoi_kusama.jpg": "4e2056dc50a83a3d2dfa249d43a210bd",
"assets/assets/images/styles/artists/paul_klee.jpg": "e8b990b39d03fe08087d1f2538513c06",
"assets/assets/images/styles/artists/willem_de_koonig.jpg": "3e189bc706afd5d3c465ef6f214501aa",
"assets/assets/images/styles/artists/jack_kirby.jpg": "d73d4e5af21dba1612f3ea8719eea4fc",
"assets/assets/images/styles/artists/frida_kahlo.jpg": "d27bf08a7812aa54dbf6ef7566098649",
"assets/assets/images/aspect_ratio.webp": "10e54f8aabe5cc825dc6d41fc1c6d7ce",
"assets/assets/images/inputs/aspect_ratio.png": "080041d1dc7d8859d9fa734fd9fb4fcc",
"assets/assets/images/inputs/stop.png": "e32431752bc012466c6ef4b63dbca2bc",
"assets/assets/images/inputs/tile.png": "5bd1ce3bce88d913d909d97f04e710aa",
"assets/assets/images/inputs/weird.png": "98e37f5f66b5d16bf20122d897e3430c",
"assets/assets/images/inputs/repeat.png": "ae7a4c7cc27ef9b9bbe3c2a6f5da03e9",
"assets/assets/images/inputs/seed.png": "90aed1f74c26eef151b4f7f849e0c918",
"assets/assets/images/inputs/version.png": "f65214fc9ea21a8f5c217d348812ca36",
"assets/assets/images/inputs/quality.png": "a650767df03984155f1bf7056ba1a0f5",
"assets/assets/images/inputs/chaos.png": "c97dff7e03a0e39c721c115a26f7aa58",
"assets/assets/images/inputs/exclude.png": "ed87045b510a188bc7a9e731e33c5a4a",
"assets/assets/images/inputs/stylize.png": "951625f1ca862a7f0cc6bebce8c5b80a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
