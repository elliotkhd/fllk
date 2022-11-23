'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c1e17d5e887e9b75b2a48b8291a98d34",
"index.html": "2853dbe4e429446bb07d9bf9b56fbe28",
"/": "2853dbe4e429446bb07d9bf9b56fbe28",
"main.dart.js": "eaa97299f0223e6563e1552bb1a93907",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "814b8730727e7e73af2a118631e4a6d6",
"assets/AssetManifest.json": "44bef886fec794a4083dc8a207e61d4b",
"assets/NOTICES": "d5b518456effc0e6e153862ae296fb53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "83c8d3422bde33acc337f86b1ff8aff2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/pets/parrot.png": "6eab23135f922de3ac5177918c4ae91c",
"assets/assets/pets/dog.png": "de3021dffcfc5f9ce85d249725b764c9",
"assets/assets/pets/smurfs.png": "0be655143a0a0cb892e8469dd04f3c56",
"assets/assets/pets/horse.png": "7b89a5dcee175f639a385dcad519adbe",
"assets/assets/pets/rabbit.png": "e4acdc1acfa9287396a63e3c2a2d9fe9",
"assets/assets/pets/whale.png": "ced1e9fa466f260b5c580753e0ef041b",
"assets/assets/pets/rhino.png": "c0ed53286d932362bb4ec64ebc04f8b0",
"assets/assets/pets/deer.png": "49b674b74569d7ebd077bdd617395b4b",
"assets/assets/pets/elephant.png": "95b65c45501069f471a8610f82def20a",
"assets/assets/pets/dolphin.png": "82952b0689e02a22c0570ba49cfa857e",
"assets/assets/pets/stegosaurus.png": "18249db1acc9871893303d3077685d99",
"assets/assets/pets/lion.png": "a6d29fd225e68faf192dda1955f9cabd",
"assets/assets/pets/tiger.png": "5bb4089b09929cfe737f99a3202b5fc7",
"assets/assets/pets/sheep.png": "e593bc317f9db6a40f386be4f3319de2",
"assets/assets/pets/dogRed.png": "6b6bf6b41ecc2e74c71472525a75e326",
"assets/assets/pets/cow.png": "1b5a46eaf6dc836739dd942f18a7004a",
"assets/assets/pets/lionFire.png": "1153f114ff1d8d2df245bc29dc4d8aae",
"assets/assets/pets/owl.png": "df35a2d9e1a4f5a766d4cb1a4fc458a7",
"assets/assets/pets/tRex.png": "5cb7a5b837dc679f9ada339df577f001",
"assets/assets/pets/peacock.png": "7f97b8955933b2a156194ce6fcbb6489",
"assets/assets/pets/chameleon.png": "2e4b3438d945f0d7ac49cfcdede1cd41",
"assets/assets/pets/penguin.png": "7b1f2804fda029c1ac6b02da2d2d2fd3",
"assets/assets/pets/monkeyPurple.png": "fa70fb704dfeef867e1e1a618f4dc3d8",
"assets/assets/pets/mouse.png": "446a5ef3af140251c29b137330dcd1f5",
"assets/assets/pets/squirrel.png": "081d3e4c50f37cc6ebc3a84bf6884599",
"assets/assets/pets/cat.png": "e57344fb4836899930d155239b589407",
"assets/assets/pets/parrotBig.png": "11d50d63feddd14cfa1fe6cab7118842",
"assets/assets/pets/frog.png": "37d1e15342405ae14b34c266bc43bd52",
"assets/assets/pets/sheepBig.png": "1db7062aeecf54b3ba4e738dca972536",
"assets/assets/pets/lizard.png": "1ffafb00bf379dbe22679664ba170340",
"assets/assets/pets/monkey.png": "81d80614d6a01d26f8d46f5cfe276bec",
"assets/assets/pets/bat.png": "ff073d2548ee56998d821856b991ebb7",
"assets/assets/pets/seal.png": "20cfbf6db6433a67baf9731ef7953481",
"assets/assets/pets/fox.png": "3d43022ef69ab04936b9d94982152983",
"assets/assets/pets/pig.png": "fd3075ce39714d7c3ddfd0c850b4fdf7",
"assets/assets/pets/koala.png": "e126d07273983a00b78712f28db55a9b",
"assets/assets/pets/snail.png": "539565d1ba7ff7e69a549f296a6f189f",
"assets/assets/pets/triceratops.png": "5b2faf43aa6c0d798bf9e3fb528c684b",
"assets/assets/pets/hedgehog.png": "abca79a98eea2fb8c78d5b430bece5ca",
"assets/assets/pets/jay.png": "4842f7d8bfe58ff3e55ed32357a1dd35",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
