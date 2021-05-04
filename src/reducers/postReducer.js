import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    CLEAR_CONTACT,
    DELETE_SELECTED_CONTACT,
} from "../constant/types";

const intialState = {
    contacts: [
        {
            "id": 12770,
            "title": "Veniam quisquam veniam odio non soluta occaecati.",
            "category": "Monitored haptic Tuna",
            "content": "Voluptatem consectetur recusandae in. Aut laboriosam delectus laudantium enim necessitatibus vel voluptas ullam atque. Beatae maiores sit illum earum nulla hic. Aperiam nostrum facilis. Qui labore sit non. Doloremque illum excepturi consectetur unde nulla sed ratione expedita.\n \rUnde tempore dolore explicabo maxime eos quam optio harum tempora. Inventore voluptas ut autem molestiae. Beatae tempore voluptates laudantium.\n \rNulla consequatur quasi. Quae accusantium nobis illum tempore fuga. Pariatur iste et. Voluptates odit ipsam consectetur. Est molestiae aut deserunt ea consequatur temporibus magnam dolorem.",
            "like": false
        },
        {
            "id": 69394,
            "title": "Consequatur facere autem rerum.",
            "category": "Fantastic Wooden Shirt iterate Gorgeous",
            "content": "Alias est voluptatum. Voluptas ratione consequuntur. Nobis nulla quae error vitae vero voluptatem minima distinctio. Enim vero quia ullam ea sit est unde.\n \rNumquam molestiae aliquid. Dolore et et magni aut sint odit nobis. Repellat quam at ea ea iste vero quis quia et. Dolor voluptate itaque fugiat beatae ratione debitis. Earum voluptate beatae voluptatem.\n \rQuasi corporis laborum vero occaecati id nihil. Culpa quidem vitae illum fugit quos. Voluptas voluptatem aliquid. Deleniti sit hic.",
            "like": false
        },
        {
            "id": 29863,
            "title": "Saepe ut amet.",
            "category": "seize",
            "content": "Voluptatem eum aut nulla. Ullam ut et in. Quod consectetur in.\n \rExcepturi molestias quasi et ab sed eos laudantium. Distinctio aspernatur est hic sunt rerum est expedita eos reiciendis. Quod mollitia sint nam reiciendis sed repudiandae dolore perferendis repudiandae. Laudantium iure dolores ducimus voluptates. Asperiores voluptatem sunt vel. Dolor facere ut quia quo accusantium praesentium et.\n \rQuia fugiat cumque distinctio voluptatum aut quo. Itaque accusantium neque nemo distinctio eveniet magni exercitationem. Dolorum cupiditate officia expedita iusto vitae consequatur est.",
            "like": false
        },
        {
            "id": 55994,
            "title": "Et quam non et earum ipsum explicabo est tempore.",
            "category": "pixel Angola interface",
            "content": "Error nihil soluta nulla numquam et sint. Eaque maxime distinctio ut consequatur voluptatem fugiat. Explicabo in dicta est nihil ab sequi veritatis. Necessitatibus quis voluptatem debitis et quia autem. Quo quod doloribus qui quae et totam quis. Aut consequuntur sit.\n \rFacilis est similique veniam aliquam aut eius optio et est. Ducimus non eum molestiae necessitatibus corrupti rem voluptatem. Eum ullam quis ab aut.\n \rTemporibus voluptates nisi dicta labore omnis omnis id quos cupiditate. Dolor provident quod enim. Optio quo rerum non est minus.",
            "like": true
        },
        {
            "id": 7266,
            "title": "Asperiores velit dolore quae est animi assumenda eos.",
            "category": "Texas turn-key complexity",
            "content": "Omnis et occaecati sequi neque. Nisi voluptate dolor mollitia similique sint voluptatem voluptatum omnis autem. Ex rerum non hic et possimus aliquam qui libero. Et magni in quis possimus.\n \rTempore quia impedit soluta in similique. Quo magni vitae provident quisquam nihil fuga nesciunt omnis optio. Qui tenetur ullam corrupti rerum. Nesciunt harum rem voluptatibus. Nihil consequuntur et voluptatem explicabo repellat earum.\n \rDolorem autem ullam unde voluptas dolores et culpa amet. Rerum rerum adipisci expedita hic eos adipisci ipsum officiis nam. Vitae suscipit illo non at numquam soluta non qui ducimus. Quia quis explicabo et eos. Qui earum officia ducimus quia sequi mollitia ut. Libero quia at et voluptas.",
            "like": false
        },
        {
            "id": 88778,
            "title": "Sequi earum quidem voluptate nisi sed vero minima qui.",
            "category": "copying Rustic Cotton Pizza Computers",
            "content": "Ut unde earum nostrum reprehenderit asperiores et dolor voluptates. Ipsam voluptate voluptate esse sapiente itaque delectus quis et. Velit impedit soluta magnam. Enim nostrum et asperiores.\n \rPossimus cupiditate earum ipsam. Porro qui nulla et cupiditate eveniet. Dicta animi et autem eos ipsum voluptas sequi. Reiciendis veritatis sit ipsa et ex doloremque sint ducimus commodi. In sunt enim eaque laudantium blanditiis excepturi accusantium temporibus qui. Sint vero placeat non sint ut.\n \rMinus nisi totam perferendis repudiandae nisi id quae. Non quisquam quis magni facere. Minus quisquam aut reiciendis qui aut labore voluptatibus aut nesciunt. Eum laboriosam et eaque explicabo doloribus ut velit iure. Tenetur atque reprehenderit est consequuntur deleniti qui et consequuntur. Molestiae qui voluptatem ipsum.",
            "like": false
        },
        {
            "id": 13530,
            "title": "Impedit iure reprehenderit ipsam.",
            "category": "Hollow driver",
            "content": "In autem enim consequatur cum laborum beatae. Et voluptatem sed aut dignissimos magnam reprehenderit incidunt deleniti quibusdam. Provident perferendis odio illum sit possimus odio voluptas.\n \rUt quia repudiandae quod consequatur reiciendis magnam aut deleniti. Harum aut mollitia eum error doloremque eveniet incidunt. Cupiditate velit velit reprehenderit maiores voluptatem. Vitae nisi aut aut quas.\n \rModi velit itaque. Molestiae laudantium nobis qui magnam qui ullam. Praesentium sunt assumenda asperiores voluptates.",
            "like": false
        },
        {
            "id": 10114,
            "title": "Earum ex sunt quae quibusdam porro mollitia accusamus.",
            "category": "Seychelles Rupee Future-proofed",
            "content": "Quae libero inventore. Repudiandae ea explicabo eos quia facilis dolores ducimus. A illo dolores qui laudantium. Perspiciatis aut reiciendis id est odit officia minus. Ut consectetur et dolores maxime. Eum enim ratione.\n \rEnim et non aspernatur itaque ut numquam ea. Fugit nostrum perspiciatis error qui impedit accusantium. Laudantium aut iusto minus at excepturi id error. Ullam expedita magni nihil voluptatibus sunt nemo possimus. Optio accusamus quia possimus illum qui alias. Qui vitae doloribus dolor explicabo officiis.\n \rRerum reprehenderit rem quas. Ratione possimus et dolores provident reprehenderit et qui cupiditate alias. Nisi aspernatur corporis recusandae molestias et est harum cum. Nobis ut consectetur doloribus at.",
            "like": true
        },
        {
            "id": 98191,
            "title": "Porro iusto itaque facilis consequatur in accusamus et provident.",
            "category": "invoice",
            "content": "Labore aut non. Est non pariatur ea ut autem odit. Soluta dolorem incidunt laudantium enim. Dolores recusandae illo facilis. Explicabo dolorem perferendis aut quo sequi modi voluptatem qui. Id a aut quibusdam.\n \rRem nobis dolore quia minima maxime sed. Maiores laudantium aut adipisci nihil. Officia totam ad et ullam eligendi cum omnis. Aut iure est consequatur minima. Voluptas dolor cupiditate nulla aut eius incidunt.\n \rRepellendus ipsum natus porro rerum cumque minus officiis. Autem dolor aut. Quisquam omnis repellendus sed dolorum nisi ut reiciendis velit vero.",
            "like": true
        },
        {
            "id": 57801,
            "title": "Aperiam nihil quo tempore ut eaque id officiis.",
            "category": "Practical Plastic Towels Strategist parsing",
            "content": "Voluptate temporibus nihil molestias numquam. Reprehenderit ipsum consequuntur et a. Voluptas molestias est sed non voluptas eveniet temporibus. Laudantium corrupti numquam aut quia nisi enim ratione nulla voluptates. Voluptatem amet voluptas beatae.\n \rNihil in sed distinctio nam expedita soluta deserunt. Rerum unde et id in adipisci in. Quibusdam totam quo voluptatem aliquid. Aut sed eligendi.\n \rDeleniti dolor pariatur tenetur quod accusamus. Odio modi sed dolor deserunt commodi iure sapiente ut ipsa. Modi et nesciunt autem placeat est rerum.",
            "like": true
        },
        {
            "id": 68141,
            "title": "Quis ut voluptates minus quia est aliquam sint.",
            "category": "deposit zero administration Automotive",
            "content": "Rerum laboriosam reprehenderit dicta omnis sed molestiae quis laborum repudiandae. Sit voluptatem impedit qui doloremque. Molestiae sapiente temporibus similique excepturi beatae explicabo quas impedit aliquam.\n \rIllum corporis et. Nesciunt rem mollitia amet repellat corrupti et est distinctio. Omnis ipsa modi fuga aspernatur molestias nisi at. Et molestiae voluptatem nulla. Et ut vero dolorem esse consequatur.\n \rEius eum voluptate fuga velit et. Laudantium sunt omnis magnam ut aut molestiae. Consectetur ut consequuntur consequatur voluptates. Voluptates est consequatur quasi quidem eos ipsa nemo.",
            "like": false
        },
        {
            "id": 88364,
            "title": "Explicabo aut qui ullam qui cum omnis porro.",
            "category": "Marketing Central Computer",
            "content": "Mollitia ex laudantium numquam dolores molestias rerum quod magni. Eveniet impedit voluptatem ipsam velit quia consequatur possimus. Nobis quis debitis. Est debitis aperiam aut nam exercitationem consequuntur. Quas qui omnis aut et. Sit illo voluptatem numquam quibusdam.\n \rNon reiciendis error molestiae corrupti amet optio. Dolorem rerum aperiam voluptatum. Voluptatem illo eaque vitae sapiente. Cupiditate aperiam qui porro dolor temporibus reprehenderit.\n \rMinima iusto odit expedita. Repellendus nobis aut repudiandae perferendis laudantium veniam quidem ex iste. Expedita et sint laudantium et dolores tenetur blanditiis vero non. Omnis et enim blanditiis et fugiat error officiis voluptas consequuntur. Optio sapiente aut ut similique. Impedit tenetur dolorem quia eum velit animi sunt.",
            "like": false
        },
        {
            "id": 34141,
            "title": "Dignissimos inventore quia iure aut maiores.",
            "category": "generate deposit viral",
            "content": "Illum et cum accusantium ducimus repudiandae voluptas sint beatae vitae. Accusamus possimus repellendus quia sunt sunt quis vel earum amet. Quas est repellendus accusantium necessitatibus. Repudiandae non voluptatem consequatur qui enim quisquam doloremque similique laudantium.\n \rBlanditiis minima deleniti sed quia aut. Id et et dolores. Et molestiae aut. Facilis eum voluptatem placeat neque voluptatem est ut animi deleniti. Quae libero provident qui qui.\n \rQuam iusto totam et expedita. Et eum ipsum quibusdam soluta et unde eius. Praesentium impedit ea. Necessitatibus et nobis sit beatae. Voluptatem voluptatum est excepturi labore quasi sit quos sit aliquid. Sit at iste.",
            "like": false
        },
        {
            "id": 19686,
            "title": "Ut doloremque placeat quisquam.",
            "category": "New Leu Dalasi",
            "content": "Qui fuga et voluptatibus autem. Qui saepe vel qui. Aut accusamus cum non saepe id reiciendis.\n \rNostrum iusto explicabo cum culpa velit sunt. Voluptatem minus non delectus quasi eligendi atque optio. Alias ullam et ea hic mollitia dolore exercitationem.\n \rAspernatur sint omnis sit hic non et cupiditate autem. Non expedita consequuntur. Asperiores vero facere. Nihil laudantium ex praesentium non est harum.",
            "like": true
        },
        {
            "id": 41032,
            "title": "Dolor ullam eligendi reiciendis nihil.",
            "category": "virtual",
            "content": "In non repellat dolorem harum voluptatem nam nemo fugiat dicta. Voluptatem temporibus sapiente quia. Aspernatur corporis perferendis sint aut. Aut voluptas omnis sint incidunt ea sunt in. Autem dicta et asperiores similique doloribus deserunt quae. Dolorum consectetur officia sunt tempore explicabo enim quo.\n \rConsectetur sequi qui dolor omnis temporibus aspernatur dolorem voluptatem. Culpa exercitationem perferendis. Numquam quis cumque dolor beatae ratione dignissimos dolores amet aliquam. Voluptatem repellendus nostrum aut optio corporis odit.\n \rMagnam illo dignissimos omnis architecto nulla. Illo ipsam et voluptatem et nesciunt aut dicta. Sed ut sint autem est odit. Vitae quos quae dolores excepturi et dolores maxime ea laboriosam.",
            "like": false
        },
        {
            "id": 91067,
            "title": "Voluptates itaque hic.",
            "category": "Administrator",
            "content": "Tempore et natus modi. Eos dolorum minus enim. Et vero voluptas in ea repellendus vero et praesentium. Voluptate et quos aut itaque recusandae expedita alias molestiae sit. Qui cum similique eius enim doloremque maiores alias necessitatibus. Sit dolore ut sed.\n \rEt ad et enim consequatur autem. Minima tenetur et delectus est. Sed quia et qui exercitationem sit magni quidem aut. Debitis eligendi minima cum hic harum at nesciunt recusandae. Voluptas molestias nemo dolorum quae sunt. Atque sint sint ut occaecati qui eveniet.\n \rMaiores aperiam facilis corporis commodi aperiam veniam ut pariatur. Reprehenderit voluptatem nulla eum itaque sequi impedit nobis. Quod et temporibus sed earum consequatur modi culpa deserunt. Nesciunt quasi eaque ipsum omnis ut. Eum aspernatur quam sapiente occaecati molestiae qui quaerat cum sequi. Quod qui quisquam placeat velit quam molestiae voluptatem non.",
            "like": true
        },
        {
            "id": 60517,
            "title": "Nam soluta ipsum asperiores labore qui qui soluta repellendus.",
            "category": "Louisiana",
            "content": "Dicta fugit doloribus odit illum quo tenetur consectetur reiciendis. Aut quas quia blanditiis ipsa a sit. Architecto odit molestiae vero ut rerum aut voluptatum dolorum voluptatem. Eos ipsum et quaerat porro sit nulla. Sit reprehenderit quos praesentium.\n \rVeniam hic modi sit quos amet molestiae. Rerum et alias nihil. Officiis dolores non odio. Praesentium eum natus porro provident quod autem assumenda. Necessitatibus necessitatibus suscipit recusandae. Nemo reprehenderit numquam et cumque qui aut culpa sequi ullam.\n \rSed ducimus tempora corrupti ut fugit fugiat voluptatibus consequuntur assumenda. Molestias qui accusamus consequatur animi est quo suscipit. Ut esse ut natus quis et beatae iusto qui et. Ut quis sint similique eius.",
            "like": true
        },
        {
            "id": 30813,
            "title": "Minus sequi odit.",
            "category": "Malaysia",
            "content": "Doloribus sunt eum voluptatem vel. Sed ea temporibus laborum distinctio odio quod quo. Vel veritatis omnis vero ipsum. Mollitia distinctio consequatur et ut tenetur commodi et et.\n \rVoluptatem voluptatum provident sed sed voluptas aperiam autem vero. Deleniti excepturi neque. Corporis suscipit omnis enim numquam. Repellat aperiam tempore ipsam quidem dolore. In vel optio autem.\n \rVoluptatem molestiae veritatis voluptatibus hic est est occaecati ea. Ipsa eveniet explicabo voluptatem blanditiis voluptatibus rem sint est. Quisquam ab cum quaerat consequatur aut.",
            "like": false
        },
        {
            "id": 77539,
            "title": "Mollitia omnis ipsam expedita esse vitae magnam saepe doloremque.",
            "category": "Personal Loan Account",
            "content": "Unde est voluptas accusamus dolores quisquam. Magni suscipit quia a impedit et. Aut a asperiores unde cumque iusto consectetur voluptatibus. Voluptatem sapiente perferendis debitis aliquam est. Aperiam soluta velit soluta voluptas odit. Beatae laborum fugit sint voluptatem eum facere sed laudantium cumque.\n \rMagnam accusantium velit et expedita enim debitis. Sed quis laudantium sed quibusdam. Quos sint harum. Et accusamus veniam omnis iste recusandae vel voluptas ab error.\n \rNam fuga molestias non esse voluptatum nemo debitis. Sed culpa amet et eligendi iste in ut omnis corrupti. Aut consequuntur odit exercitationem laudantium.",
            "like": false
        },
        {
            "id": 59088,
            "title": "Quis alias aut iure.",
            "category": "end-to-end parse",
            "content": "Et quod accusamus laboriosam fugit. In quod sint rerum saepe ut rerum et. Est nam culpa corporis unde.\n \rAnimi asperiores pariatur nihil et. Id at qui omnis quod est earum et porro. Est et ipsam totam vero adipisci. Ut ut totam nemo occaecati molestiae repellendus qui ullam aut. Repellat suscipit quod et sequi atque.\n \rFacilis expedita molestias et in ut. Suscipit explicabo alias veniam. Neque et vitae blanditiis repellat hic sequi. Id quia et vitae.",
            "like": true
        },
        {
            "id": 32393,
            "title": "Rerum consequatur explicabo in minus odit nesciunt enim.",
            "category": "solution-oriented",
            "content": "Voluptates porro ut. Dolores excepturi tenetur blanditiis velit cumque laudantium perferendis. Voluptates amet cupiditate et. Explicabo suscipit eos. Esse perferendis nulla rerum deleniti qui dolorem eligendi nam. Qui dolor ut soluta sequi harum excepturi sed deleniti.\n \rDoloribus explicabo doloribus. Et rerum ea nisi voluptatum ea praesentium eius fugiat. Est iste recusandae iste. Dolor facere placeat facere quos non itaque saepe quam.\n \rNon laudantium reiciendis quasi. Eos expedita ut sed vel repellendus magni quos quae qui. Voluptatem quidem sed consequatur nihil provident id.",
            "like": false
        },
        {
            "id": 87731,
            "title": "Qui nostrum id rerum sed qui placeat animi eos laborum.",
            "category": "methodologies",
            "content": "Temporibus soluta voluptatem dolor eum in ut minima voluptatem. Molestiae facilis in ab non incidunt excepturi. Aspernatur sed aut eos atque rerum voluptates. Totam sit rem. Numquam non amet vitae incidunt. Qui dolore nisi nam quo facere odio officia.\n \rUnde labore minima modi. Architecto sunt quo nobis. Iste reiciendis enim qui fugit dicta aut. Sed nostrum consequatur non facilis. Cum facilis tempora. Ex officiis fuga sit.\n \rId sed cupiditate cum dolorem perferendis voluptates. Expedita omnis at expedita minus vel ipsa esse. Tenetur unde eos. Quas dignissimos tempore repudiandae est reiciendis ea perspiciatis.",
            "like": true
        },
        {
            "id": 95512,
            "title": "Qui earum doloremque ducimus et.",
            "category": "District Missouri Denar",
            "content": "Pariatur nesciunt nobis consequuntur eligendi minima impedit illum id. Vel sit cumque ratione ut quibusdam dolores sed et voluptates. Dolore culpa delectus ullam. Mollitia et et impedit reiciendis aliquid minima.\n \rEos velit dolorem delectus consequatur. Eos reprehenderit sit molestias. Quia quis illum sint ullam eveniet omnis. Eaque facilis quisquam. Nostrum earum ut atque illo mollitia dignissimos.\n \rVelit consectetur rerum nisi et aspernatur est. Sequi adipisci occaecati. Nam dicta velit qui ea aspernatur eaque amet doloribus doloremque. Rerum architecto quia dignissimos dolor praesentium architecto rerum vel.",
            "like": true
        },
        {
            "id": 9837,
            "title": "Sunt iure quasi dolorum omnis et.",
            "category": "Generic",
            "content": "Dolorum magni laborum fugit ut eaque eos. Perferendis ipsa dolores unde. Quo dolore animi illo labore omnis eum in qui aut. Consequuntur architecto magnam minus sequi perferendis maxime.\n \rOccaecati sit porro natus maxime et. Corrupti tempore maiores qui. Repellendus qui omnis facere autem quibusdam. Totam quidem enim. Et ut tempora neque. Ducimus voluptatibus accusantium dolores laudantium et quia.\n \rIncidunt et repellat culpa aut omnis perspiciatis non. Dolores dolores ex id sit repellendus aliquid quia sequi. Delectus labore repellat eveniet quia. Beatae voluptas aut molestias quia autem. Natus ab voluptatum ea. Veniam doloribus magni quae.",
            "like": true
        },
        {
            "id": 11701,
            "title": "Eum omnis laudantium veniam quis eum dolorum beatae assumenda.",
            "category": "Intuitive Shoes haptic",
            "content": "Voluptas consequatur eum numquam. Tempora est velit consequatur dolor. Mollitia iure natus quaerat eius aliquam quam.\n \rVoluptate dolorem eos accusantium expedita veritatis est. Delectus pariatur quia a est consectetur repellat et. Quisquam eos autem rerum illum.\n \rOdit repellat dolorem cum sequi fugit delectus sed porro. Omnis quis molestiae. Voluptate corrupti quo minus. Sunt est et sed omnis voluptatum voluptas sint temporibus eaque. Voluptatibus voluptatem deserunt voluptatem.",
            "like": false
        },
        {
            "id": 65967,
            "title": "Fuga et eos distinctio laudantium natus aut aut quia.",
            "category": "logistical yellow",
            "content": "Et numquam omnis aperiam sit voluptates soluta illum necessitatibus. Voluptatem expedita architecto accusantium. Iste fugit saepe sit nostrum quis et.\n \rCulpa minus nobis esse ut id nemo deserunt. Facere vel vel sed ipsam excepturi officiis aut cum dolor. Distinctio quidem in sed. Qui quia dolorem ut in quo aliquid repellat. Ipsam quia molestiae aspernatur.\n \rCulpa et rerum et quis. Minima doloribus earum voluptatum illo eveniet quia voluptatibus nemo accusamus. Et nostrum corrupti aperiam voluptas. Beatae illo consequatur saepe et architecto ad mollitia at harum. Voluptas distinctio architecto dolores voluptatem sit. Inventore facere nam qui sequi vel ipsum mollitia quod nulla.",
            "like": false
        },
        {
            "id": 72614,
            "title": "Est est quisquam at.",
            "category": "Soft Cotton Mauritius",
            "content": "Illo blanditiis debitis. Sequi eius dignissimos consequatur. Sunt amet fugit. Facilis eum non pariatur qui molestias qui eveniet. Voluptatibus neque voluptatem quaerat praesentium quod.\n \rRepellendus consequuntur aut nihil qui magnam pariatur. Accusamus enim ea sint molestiae. Ut quas ut et corporis enim. Quia sapiente atque autem.\n \rEt inventore aut rem cupiditate. Molestiae at totam. Occaecati consequatur qui ut labore iste.",
            "like": false
        },
        {
            "id": 45808,
            "title": "Reprehenderit odio accusamus exercitationem.",
            "category": "hack",
            "content": "Voluptatem asperiores ea. Ut hic autem ut nam doloribus incidunt qui praesentium tempore. Nam dolorem et deserunt aliquid omnis voluptatibus. Qui amet dolore debitis commodi numquam eius fuga. Rerum dolore reiciendis magnam laborum quidem vero quam.\n \rAdipisci sit repudiandae deserunt vero voluptas perferendis. Quibusdam maiores nam illum aut recusandae. Ipsum inventore reiciendis animi. Aliquid aut a aut dolor quia neque nihil enim.\n \rNon nihil sunt velit dolore aut vero quasi at dolores. Corrupti aut similique. Rerum et error molestiae rem nihil provident.",
            "like": true
        },
        {
            "id": 35921,
            "title": "Dolores sit voluptatem quae.",
            "category": "radical",
            "content": "Optio ut nihil ipsam et iure deleniti corporis. Sequi velit ipsum facilis architecto rerum eum sint doloremque. Sed corrupti iure libero deleniti necessitatibus aut. Commodi rerum sequi quis est minima impedit hic est sunt. Earum consequatur architecto omnis.\n \rImpedit sapiente qui dolore. Natus aut autem hic possimus. Earum eaque vel dolor quas et sit culpa amet. Adipisci quo atque quia aut vitae.\n \rEos libero officia doloribus autem iure temporibus quia dolorem. Est recusandae debitis architecto tempora consequatur quaerat eius nam ut. Repellendus voluptas sed quia sit et quam quaerat quasi sed. Non voluptatem vitae animi sit assumenda illum minus placeat. Voluptatem ut quibusdam nisi et. Sit dolore at.",
            "like": false
        },
        {
            "id": 8998,
            "title": "Voluptatum quae aspernatur aut omnis delectus sunt earum dignissimos rerum.",
            "category": "green",
            "content": "Ea sint ut placeat alias et nemo animi aut nihil. Sit aperiam et. Aut illum quae sed quae. Ad nobis quis eos nam consequatur. Ipsum quos sed sed minus illum quod molestias.\n \rMagni ut mollitia accusamus praesentium nisi ut incidunt qui adipisci. Libero accusantium quis officia dolor officia fugit vero quisquam non. Rerum et fugit rerum aspernatur amet voluptatem temporibus sint. Sit ipsum dolorem officiis quisquam asperiores recusandae ipsum quis. Voluptate autem quia consequatur eum ut vitae tempora consequatur.\n \rEt et voluptate molestiae voluptatum velit optio dolores. Et enim commodi enim autem. Qui quis consequatur.",
            "like": true
        },
        {
            "id": 8180,
            "title": "Cum aliquam dolore et impedit placeat esse.",
            "category": "5th generation proactive generating",
            "content": "Optio beatae tempora corporis voluptatem nihil dolores repellat. Doloribus minima accusamus incidunt. Nesciunt ut et voluptas tempora est. Sequi quia explicabo velit illum ut dolore est ab est. Maiores error modi non velit quibusdam. Asperiores dolor vel.\n \rNihil non ut id excepturi dolor corporis facilis. Soluta enim omnis nobis sint doloribus voluptas. Vitae architecto et quis quidem. Maxime est cum molestiae ut. Nihil magnam facilis labore aut quia possimus impedit at.\n \rMinus quas ut sit est sint praesentium optio ea maiores. Libero asperiores eius et animi aliquid. Ut deleniti aut. Eum amet sint consequatur.",
            "like": false
        },
        {
            "id": 64983,
            "title": "Et magni quo dolor sit.",
            "category": "Berkshire Maryland panel",
            "content": "Expedita nulla ut aliquid consequatur dolorem. Ad in culpa aut sit impedit. Et culpa fuga quasi. Animi ut amet sapiente sed aut provident esse.\n \rSunt non aut sit qui ad et omnis adipisci. Animi quaerat odio voluptas iste culpa. Mollitia aut repellendus amet velit quaerat. Et consequatur iste sed illum occaecati quidem aperiam sit. Laboriosam et quas earum ut et quis perspiciatis est.\n \rRerum ut voluptas minus commodi unde ratione. Rerum voluptates repudiandae et. Autem est facilis ducimus.",
            "like": false
        },
        {
            "id": 44974,
            "title": "Recusandae non non quidem.",
            "category": "channels",
            "content": "Dicta pariatur odio. Consequatur enim et dolor. Ut sed dolor tempora nisi laudantium id labore unde. Sint ipsam amet itaque animi quibusdam aspernatur sunt voluptatibus porro.\n \rVoluptatem atque et deserunt quia est voluptatibus. Sunt laborum ullam. Harum omnis rerum.\n \rPorro accusantium illum quo repellat. Libero provident eos. Tenetur id ab non maiores eligendi consectetur vero minus. Eum quidem est aut ipsum et sit.",
            "like": false
        },
        {
            "id": 87930,
            "title": "Quod voluptatem rerum id a fugit.",
            "category": "Money Market Account mindshare",
            "content": "Cumque aut cumque. Eveniet doloremque sunt. Quasi saepe et ut quas velit aut et. Eligendi molestiae ipsum nihil vitae quisquam. Maiores beatae ea id esse rem veniam expedita porro et.\n \rUt aperiam ducimus molestias voluptatem eligendi libero recusandae. Eveniet iure dolor et. Eius et perferendis expedita. Rerum ea in laborum. Ut ducimus praesentium quis veniam. In nisi et consequatur.\n \rNon eveniet sed consequatur dolor voluptas. Sit aliquid ut. Ratione aspernatur quae voluptatum explicabo quia cupiditate suscipit repudiandae. Error repellendus ipsam. Vitae quod eius ut explicabo laborum adipisci assumenda ducimus earum.",
            "like": false
        },
        {
            "id": 5921,
            "title": "Provident blanditiis debitis vitae est nesciunt sed in eius ut.",
            "category": "parallelism viral",
            "content": "Qui et provident quod sit sunt quisquam sunt. Aperiam sapiente veritatis. Animi laudantium adipisci aut.\n \rEius perferendis eos eum aliquam. Sit aut soluta quis excepturi temporibus assumenda eligendi hic. Praesentium fugiat quasi consequatur. Voluptatem qui et reprehenderit. Cum qui nihil quia quo. Molestias quod dicta similique.\n \rIn quis ut est quos dicta placeat aut. Voluptatibus fugiat omnis quia et nemo porro et. Laborum labore sunt voluptatibus necessitatibus. Ipsum architecto occaecati omnis velit iste consequuntur.",
            "like": false
        },
        {
            "id": 56957,
            "title": "Quos non non.",
            "category": "Road Garden Movies",
            "content": "Voluptatem inventore mollitia sapiente fuga enim est eaque eum. Ea rem dolor ut occaecati labore ut error. Ad consequatur debitis voluptas voluptates omnis consectetur. Pariatur suscipit nemo est necessitatibus ad. Dolores non tempora quisquam ab est qui voluptatem est a. Accusamus earum suscipit inventore.\n \rAut repellendus praesentium corrupti consequuntur ipsa mollitia velit. Voluptatibus dolorem similique labore incidunt esse voluptas nulla aut. Ea vero eum magni quos temporibus voluptates consectetur. Dicta tempora omnis et vel sed nesciunt. Libero dolorum quis.\n \rAtque illo aut sit et ea quam sit. Iusto harum voluptas voluptatum culpa. Esse molestias laboriosam dolores cumque et aspernatur. Dolor recusandae suscipit delectus voluptatem exercitationem.",
            "like": true
        },
        {
            "id": 77347,
            "title": "Aut hic magnam reprehenderit voluptas dolor molestias necessitatibus magnam animi.",
            "category": "Granite",
            "content": "Laborum et ullam voluptates. Ut non quia dolorem. Ullam et ut dignissimos maxime animi culpa eum id. Ut ab dolorem odit molestias iure molestias ut.\n \rId suscipit reprehenderit. Minima autem voluptatem aut modi est. Praesentium dolorem enim ut ut minima quia possimus ad. Ad ipsum explicabo omnis enim aspernatur commodi veritatis.\n \rUllam molestiae necessitatibus accusantium rerum natus. Qui aut labore nihil est sequi et delectus. Aut omnis dolorem quae consequatur. Nulla corporis aspernatur doloremque sunt atque. Aliquam delectus ea deleniti dolor esse id.",
            "like": true
        },
        {
            "id": 50373,
            "title": "Veniam quisquam aut.",
            "category": "Liaison Rustic Cotton Chips Senior",
            "content": "Quis totam non ea. Aut iusto veritatis optio qui. Provident dolore in eligendi eius perspiciatis.\n \rAccusantium et numquam eos vel. Excepturi eveniet dignissimos numquam incidunt molestiae vitae et saepe asperiores. Saepe ut et quia voluptatem corrupti ad laudantium quidem qui.\n \rArchitecto asperiores ad eum dolore. Doloribus totam commodi quo. Omnis nemo ab et. Atque et facere in sit. Dolor ea adipisci possimus natus.",
            "like": false
        },
        {
            "id": 37395,
            "title": "Exercitationem ut eum.",
            "category": "Senior Forward Iowa",
            "content": "Et et adipisci sed temporibus nam ea molestiae possimus repellendus. Quos consequatur quia voluptatem. Autem recusandae rerum sint eius eligendi. Id fuga eos autem temporibus.\n \rEt adipisci quia rerum qui nihil labore. Quia non eum nihil officiis dolor qui. Nisi ex illum nam et reiciendis. Omnis quis est.\n \rId ex qui voluptate sequi magni impedit voluptatem. Vero eum eaque. Sapiente est rerum tenetur ad doloribus dolorem porro dolor dignissimos. Rem dolores quibusdam recusandae sit sint. Autem ab est. Quidem et qui fugit voluptates vel.",
            "like": true
        },
        {
            "id": 35392,
            "title": "Ea corrupti sint quisquam quasi officiis vel ducimus quaerat earum.",
            "category": "Mobility neural solid state",
            "content": "Laudantium qui rerum dignissimos aut voluptatibus sunt. Ipsum est ut dolore error tenetur perspiciatis. Blanditiis pariatur rerum dolor totam esse. Soluta eos delectus qui est nihil. Laborum quibusdam qui et.\n \rQui reiciendis sed saepe et voluptatem sunt qui. Id quia perspiciatis beatae natus officiis. Officia quia quam quidem autem aspernatur. Facilis debitis mollitia qui et qui. Recusandae est iure ut. Et perspiciatis quae eaque.\n \rMolestiae nulla a inventore odio nihil. Doloremque ipsa ratione. Culpa dolor eos est.",
            "like": false
        },
        {
            "id": 64858,
            "title": "Totam rem illo.",
            "category": "Configuration",
            "content": "Iusto molestiae ut est. Magni et voluptatum facere adipisci quas dignissimos. Numquam quod cum ut omnis quia vel temporibus non. Excepturi quia id ad aut tempore. Occaecati rerum et.\n \rId in quisquam quas quasi est non et nulla. Tenetur mollitia quod facilis est labore ratione ex repellendus. Aut eos dignissimos in error ad.\n \rEum voluptas sunt quibusdam. Consequatur porro velit porro consequatur ipsa dolorem nam. Sapiente velit quis dolorem.",
            "like": false
        },
        {
            "id": 73370,
            "title": "Dolor qui est inventore unde repellat soluta sit deserunt enim.",
            "category": "overriding Fantastic",
            "content": "Consequatur expedita odio alias eum. Repellat molestias animi aliquam et et. Perferendis non commodi ipsa esse aliquid. Voluptatem soluta earum nisi incidunt officiis culpa animi nulla.\n \rSed et pariatur quaerat consequuntur illo facilis sed quia. Incidunt et non dolores. Minima enim nemo. Consequuntur nemo ut aperiam impedit. Eius hic at sequi consequatur ea non.\n \rUllam impedit possimus illum reiciendis. Commodi iusto dolorum cumque harum commodi est. Accusamus ex assumenda quia libero. At iste ducimus facere. Assumenda rerum rerum cumque ab et est sunt itaque. Aut aut quod veritatis ullam nemo.",
            "like": true
        },
        {
            "id": 68860,
            "title": "Vel soluta rerum sequi eum necessitatibus fugiat molestias cupiditate cum.",
            "category": "Facilitator generate Computer",
            "content": "Qui aperiam vel. Amet et impedit. Non in ipsam qui reprehenderit laboriosam ducimus blanditiis. Velit sint reiciendis debitis autem repudiandae qui quaerat. Illo iste nemo consequuntur nihil aut ut dolorem rerum. Iste fugit similique non provident voluptatem.\n \rEa quos voluptas ut enim id. Quia veniam praesentium. Voluptatem molestiae laborum. Nihil corrupti vel dolore minima facere. Voluptas minus omnis quae. Aut modi molestiae quis totam eos corporis adipisci numquam.\n \rVeniam tenetur vitae sint. Veritatis modi doloremque ut et est et alias itaque. Deleniti perspiciatis iure sint nulla saepe. Ut voluptatem molestias et expedita quis voluptatem facilis. Quia voluptatum aspernatur occaecati fugiat. Quos nisi nihil neque dolorem et facere repellendus vero.",
            "like": true
        },
        {
            "id": 81548,
            "title": "Et vel quibusdam dolorem ad modi.",
            "category": "EXE deposit",
            "content": "Non suscipit aut eligendi non nam laborum. Itaque et quo ut. Delectus iste illum id commodi suscipit sed voluptatem aliquid corrupti. In est eaque ea aut et commodi ipsa sapiente. Dolor autem quasi fugiat eos recusandae natus earum earum.\n \rAccusamus culpa ut distinctio nisi voluptatum optio harum consectetur atque. Perferendis quo earum harum veniam non non recusandae expedita. Quod fuga molestiae aliquid laudantium dolore. Non saepe tempore nam beatae dolore dolore. Nulla ab harum error dolorem.\n \rUt cupiditate dolor et odit libero est et vero. Quibusdam ipsa ex ab quam vero est earum. Ducimus ad voluptate laborum itaque. Ea voluptas sit quae. Molestiae magni sed ut quas ratione aut corrupti dicta culpa.",
            "like": false
        },
        {
            "id": 35093,
            "title": "Ut non est veniam possimus sunt non.",
            "category": "copy Handcrafted Frozen Ball maximized",
            "content": "Ea repellendus error esse id rerum saepe dolorem. Est consequatur sit deleniti delectus consequatur dolorem a occaecati omnis. Velit ut autem eaque quia et eum consequatur ad. Eos deleniti in. Cumque sit et.\n \rAut exercitationem voluptas laborum voluptatem quo. Doloribus numquam inventore ipsam vitae libero ipsum. Vel accusamus ipsam. Corrupti ut et.\n \rSed ipsa iure aliquid nostrum illo totam. Officiis quis dolore. Iusto dolores eum ut molestiae alias sed velit illo ratione. Eveniet quia sed facere. Minus accusamus facilis praesentium recusandae et et. Qui accusantium cum eius id aperiam nostrum.",
            "like": true
        },
        {
            "id": 97702,
            "title": "In ab quia aut voluptatem placeat ut saepe deleniti dolorem.",
            "category": "Refined Concrete Shoes",
            "content": "Quasi veniam quia quo pariatur autem itaque. Incidunt ut minima fugit minima omnis alias voluptatibus hic. Corrupti recusandae dignissimos nobis.\n \rLaudantium tempora facere asperiores nostrum repellendus et excepturi. Beatae et consequuntur dolores id illo reiciendis molestias ut. Id vel tenetur expedita suscipit.\n \rAd aut iste. Soluta eos odit qui autem. Consequatur in corporis veniam iusto quia. Voluptas alias et ut officiis sunt quia aliquam.",
            "like": false
        },
        {
            "id": 38065,
            "title": "Et et consequatur.",
            "category": "fresh-thinking",
            "content": "Aliquam commodi exercitationem similique similique eligendi voluptatem. Maiores sit inventore atque ratione. Delectus corrupti eos. Adipisci qui architecto. Et atque quod aspernatur.\n \rOdio architecto inventore perferendis doloribus incidunt similique. Est dolor quis deleniti laudantium minus aut consequuntur numquam inventore. Aut omnis laborum.\n \rFacere quis sed et nostrum vel minima harum. Quia enim tempora. Assumenda eaque iste nostrum illo perspiciatis esse. Rerum autem porro qui velit quo ipsum eos.",
            "like": false
        },
        {
            "id": 36192,
            "title": "Tempora repellendus quisquam fuga a.",
            "category": "XSS New Zealand Dollar Car",
            "content": "Architecto dignissimos et eum. Molestias voluptatibus in reiciendis et ullam dolorum corrupti. Iste quidem sed deserunt aut delectus non aut maxime rem. Commodi a totam.\n \rArchitecto dignissimos unde. Officiis rerum minima. Hic error ex quod dolores laborum qui.\n \rMolestiae nobis repellendus maiores eum sunt quam voluptatum a omnis. Quis sint vel voluptate ex aliquid ullam hic. Tenetur atque consequatur quia iste animi.",
            "like": true
        },
        {
            "id": 62712,
            "title": "Dolorem sapiente eaque qui.",
            "category": "Pants",
            "content": "Ab iste qui. Iure consectetur error dolor earum aspernatur nisi suscipit minima cumque. Rerum itaque iste aliquam provident qui quaerat ut aliquid dolorem. Omnis velit dolorem odit expedita repudiandae. Consequatur cumque laudantium ut alias in et. Mollitia autem accusamus harum.\n \rSint qui et. Ut eos sed odio eum explicabo molestiae et eos architecto. Et voluptatem rerum sed sequi eum. Recusandae quasi optio in praesentium eos quia aliquid odio vitae. Non ipsam cum molestiae dolores magni reprehenderit.\n \rMollitia tempore officiis animi ipsa. Facilis repellat necessitatibus nostrum cumque enim eius mollitia fugiat. Nihil earum ipsam cupiditate velit voluptas quia nobis similique dolores. Voluptate quas nam qui et maxime quasi tenetur eius sit. Consequatur molestias a dolor est sed occaecati eaque harum. Consequuntur quis et et asperiores.",
            "like": true
        },
        {
            "id": 23524,
            "title": "Veritatis explicabo reiciendis assumenda eos omnis in officiis quasi aperiam.",
            "category": "Sleek",
            "content": "Consequatur cumque officia voluptatem sit minus mollitia reprehenderit eaque. Autem quaerat expedita. Quia maxime maiores. Itaque culpa ut beatae ad. Cumque tenetur et maiores ipsa.\n \rIpsa molestiae facilis cupiditate ut molestiae officiis. Recusandae velit vitae. Inventore sunt aut et debitis dolorum dolorem quo vero. Rerum est dolor doloremque sit error recusandae maiores culpa. Iure ut sed iste fuga vel vero illo.\n \rSapiente aut ea dolorem dolor pariatur et qui et dicta. Et temporibus culpa fuga magnam dolorem est natus. Quos dolor ratione. Consequuntur autem ipsum magni.",
            "like": false
        }
    ],
    contact: null,
    selectedContacts: [],
};

export const postReducer = (state = intialState, action) => {
    switch (action.type) {
        case CREATE_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts],
            };
        case GET_CONTACT:
            let arr = state.contacts.filter(
                (contact) => contact.id == action.payload
            );
            arr = arr.values();
            for (let val of arr) {
                arr = val;
            }
            return {
                ...state,
                contact: arr,
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id == action.payload.id ? action.payload : contact
                ),
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id != action.payload
                ),
            };
        case DELETE_SELECTED_CONTACT:
            return {
                ...state,
                contacts: [],
            };
        case SELECT_CONTACT:
            return {
                ...state,
                selectedContacts: action.payload,
            };

        case CLEAR_CONTACT:
            return {
                ...state,
                selectedContacts: [],
            };
        default:
            return state;
    }
};
