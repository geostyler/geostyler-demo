## [1.0.1](https://github.com/geostyler/geostyler-demo/compare/v1.0.0...v1.0.1) (2025-03-19)


### Bug Fixes

* **deps:** update dependency antd to v5.22.0 ([#529](https://github.com/geostyler/geostyler-demo/issues/529)) ([e5a58c3](https://github.com/geostyler/geostyler-demo/commit/e5a58c36a4eb8bb1848a56cfb43743ba0598d059))
* **deps:** update dependency geostyler-sld-parser to v6.1.1 ([80e3b94](https://github.com/geostyler/geostyler-demo/commit/80e3b9419064eb429f0f5ab0fae51181c64edab4))
* fix base to run on gh-pages ([981ce0c](https://github.com/geostyler/geostyler-demo/commit/981ce0c83e9e36501f6c0fce0c5e8447e7208eef))

## 1.0.0 (2024-07-04)


### ⚠ BREAKING CHANGES

* Uses the next major version of GeoStyler and the
related parser packages etc. If you want to include your custom
parser here, you'll probably have to depend on the next major
versions of all geostyler packages involved (ideally using an esm
build).
* the output files will be different

### Features

* switch between split, code, map and legend view with a group button instead of a accordion ([ced0095](https://github.com/geostyler/geostyler-demo/commit/ced0095fdc3c0e3cb692895f2c8a53420e71ca1e))
* switch to vite for build ([9d5499b](https://github.com/geostyler/geostyler-demo/commit/9d5499b117c7d3375ccedc47ff43ee8d9294d0d8))
* update geostyler & prepare for next release ([3430959](https://github.com/geostyler/geostyler-demo/commit/3430959a36643cf9a47be8f128738ca6ef6d50ab))
* update to geostyler v13 ([a8ea720](https://github.com/geostyler/geostyler-demo/commit/a8ea72019a185337631cba6c6a3b4c31f6aa8ca8))


### Bug Fixes

* add missing SLDRenderer config to context ([8b7542a](https://github.com/geostyler/geostyler-demo/commit/8b7542a560404b6b24a55c780c1e6dc84ce90f4f))
* add semantic release & commitlint dev packages ([0790220](https://github.com/geostyler/geostyler-demo/commit/0790220453cef785a0c3a20805aac41a13be0ce4))
* clone style where needed ([20c612d](https://github.com/geostyler/geostyler-demo/commit/20c612db8ef69238f31031638e4af54f957cd2c0))
* **deps:** update dependency geostyler to v13.1.1 ([54cebad](https://github.com/geostyler/geostyler-demo/commit/54cebad5ef114829666ff4744299c2c34d425dda))
* **deps:** update dependency geostyler-wfs-parser to v2.0.3 ([40e07b7](https://github.com/geostyler/geostyler-demo/commit/40e07b771a1bdddc97e4b26b21f069df8f333ce0))
* fix link to geostyler release in footer ([9e7f163](https://github.com/geostyler/geostyler-demo/commit/9e7f1631fbf106ac1e69750aebe09f0ac5858c2a))
* **package:** update @types/jest to version 23.3.10 ([36c2835](https://github.com/geostyler/geostyler-demo/commit/36c28351d553ebf16d84f802de5efa8295e1270e))
* **package:** update @types/jest to version 23.3.11 ([3b75440](https://github.com/geostyler/geostyler-demo/commit/3b75440f7d37ab8649677e2ebaf57c92fed006f0))
* **package:** update @types/jest to version 24.0.0 ([439fbaf](https://github.com/geostyler/geostyler-demo/commit/439fbaff437a991eec7e9acf6b459ac3efc48a06)), closes [#77](https://github.com/geostyler/geostyler-demo/issues/77)
* **package:** update @types/node to version 10.12.10 ([e40318a](https://github.com/geostyler/geostyler-demo/commit/e40318acbda15cc75918178aecc3cc30379658f6))
* **package:** update @types/node to version 10.12.11 ([d6c6143](https://github.com/geostyler/geostyler-demo/commit/d6c61438737420b152bc367f02cbb6ac2fc6687e))
* **package:** update @types/node to version 10.12.12 ([4208522](https://github.com/geostyler/geostyler-demo/commit/4208522195a26ffb79fff030334ec77e019fde40))
* **package:** update @types/node to version 10.12.14 ([dc6bb67](https://github.com/geostyler/geostyler-demo/commit/dc6bb6724b1b65b9322073d98d3a69b40bc41bdf)), closes [#47](https://github.com/geostyler/geostyler-demo/issues/47)
* **package:** update @types/node to version 10.12.15 ([31bbb99](https://github.com/geostyler/geostyler-demo/commit/31bbb9920a09e3f04a82f9f72a1664881eeeb1f5))
* **package:** update @types/node to version 10.12.18 ([7680ec6](https://github.com/geostyler/geostyler-demo/commit/7680ec63df8dbec557be2d4a1455e98dcbee3567))
* **package:** update @types/node to version 10.12.19 ([038cb6b](https://github.com/geostyler/geostyler-demo/commit/038cb6b0569b0a4e01f836bf66aea3f2068ce52a))
* **package:** update @types/node to version 10.12.20 ([f1f32e4](https://github.com/geostyler/geostyler-demo/commit/f1f32e4f4df948a5705e1ce073f9a2f3ba79f4d0))
* **package:** update @types/node to version 10.12.21 ([336d32a](https://github.com/geostyler/geostyler-demo/commit/336d32a6032b8ed02778940fdafaf4eed516a258))
* **package:** update @types/node to version 10.12.8 ([d03cd7c](https://github.com/geostyler/geostyler-demo/commit/d03cd7ca10d82abb685fc201a401c127771c161b))
* **package:** update @types/node to version 10.12.9 ([600fc48](https://github.com/geostyler/geostyler-demo/commit/600fc4817815e26186aea58e70a59a3448c191a6))
* **package:** update @types/react to version 16.7.17 ([95297ee](https://github.com/geostyler/geostyler-demo/commit/95297ee0ed3680d208c22c2c61ffbeecf343781b)), closes [#46](https://github.com/geostyler/geostyler-demo/issues/46)
* **package:** update @types/react to version 16.7.8 ([19f5e63](https://github.com/geostyler/geostyler-demo/commit/19f5e63447ee294008e543e8a8f9fceb2ea24bda)), closes [#14](https://github.com/geostyler/geostyler-demo/issues/14)
* **package:** update @types/react to version 16.8.6 ([b98a4bc](https://github.com/geostyler/geostyler-demo/commit/b98a4bc25a752d3774cb589dcfeca1f70ad560fe))
* **package:** update @types/react to version 16.8.7 ([f12ce98](https://github.com/geostyler/geostyler-demo/commit/f12ce987fe129595feff8735da1747e82e7339da))
* **package:** update @types/react to version 16.8.8 ([f775c44](https://github.com/geostyler/geostyler-demo/commit/f775c44464b92849cca82c4051f0fc9e122204a2))
* **package:** update @types/react-dom to version 16.0.10 ([15bfa01](https://github.com/geostyler/geostyler-demo/commit/15bfa01fc57d2573b8a673f4adb78aaa90285e3f))
* **package:** update @types/react-dom to version 16.0.11 ([63674d0](https://github.com/geostyler/geostyler-demo/commit/63674d03a277a58dae9fd0d72f1c83014c9ed9f9))
* **package:** update @types/react-dom to version 16.8.3 ([7298ed4](https://github.com/geostyler/geostyler-demo/commit/7298ed45916b6c4dbdc3e126631dc210fda42ffa))
* **package:** update @types/react-dom to version 16.8.4 ([25a7aef](https://github.com/geostyler/geostyler-demo/commit/25a7aef4702b562c899a379ee7689ece145d095b))
* **package:** update antd to version 3.10.8 ([0364f80](https://github.com/geostyler/geostyler-demo/commit/0364f802acc40ef55072b19f12ed44bd939945a4))
* **package:** update antd to version 3.10.9 ([db9abde](https://github.com/geostyler/geostyler-demo/commit/db9abde8decdffa94c09f4a93e6e09d5055e27d1))
* **package:** update antd to version 3.11.2 ([4db8430](https://github.com/geostyler/geostyler-demo/commit/4db84307dc23813eb2b1ae3c9e68fcc5bcf96067)), closes [#43](https://github.com/geostyler/geostyler-demo/issues/43)
* **package:** update antd to version 3.12.3 ([5f460ae](https://github.com/geostyler/geostyler-demo/commit/5f460ae8bb1cf8ed7e215874c01aae7469a0d5e5)), closes [#65](https://github.com/geostyler/geostyler-demo/issues/65)
* **package:** update antd to version 3.14.0 ([be545d3](https://github.com/geostyler/geostyler-demo/commit/be545d3baa17b6c1a2188408a6b5efb5f065a265))
* **package:** update antd to version 3.14.1 ([41016b4](https://github.com/geostyler/geostyler-demo/commit/41016b4a3ba3a5873c675060d4dc01b7c81334c4))
* **package:** update antd to version 3.15.0 ([82dc29d](https://github.com/geostyler/geostyler-demo/commit/82dc29d78f001908a5dcabae2c0c3156c126abce))
* **package:** update antd to version 3.15.1 ([06cedae](https://github.com/geostyler/geostyler-demo/commit/06cedaee74255f8b9e437cd5eb764fbeb205b086))
* **package:** update antd to version 3.15.2 ([cca4419](https://github.com/geostyler/geostyler-demo/commit/cca4419c6fc0b19259e3cc69d464000e63ab0913))
* **package:** update antd to version 3.18.2 ([2021045](https://github.com/geostyler/geostyler-demo/commit/20210452c3764520de29515d1e9a5d0320c312e5))
* **package:** update antd to version 3.19.1 ([dde63f3](https://github.com/geostyler/geostyler-demo/commit/dde63f3a8d94684f328c3620de7de62d70483beb)), closes [#123](https://github.com/geostyler/geostyler-demo/issues/123)
* **package:** update antd to version 3.19.2 ([38e8c99](https://github.com/geostyler/geostyler-demo/commit/38e8c99abc5b72b46a01835d435b44583230d5f0))
* **package:** update antd to version 3.19.3 ([3eca315](https://github.com/geostyler/geostyler-demo/commit/3eca315243d69070f707f0447c5e3d2c3676b639))
* **package:** update antd to version 3.19.5 ([f638bc9](https://github.com/geostyler/geostyler-demo/commit/f638bc9be63e5c723b5535f1e15dcb6b57ed6a1e)), closes [#129](https://github.com/geostyler/geostyler-demo/issues/129)
* **package:** update antd to version 3.19.6 ([6e0b7ac](https://github.com/geostyler/geostyler-demo/commit/6e0b7ac1514a36a33c439a5498976889b0186d02))
* **package:** update antd to version 3.19.8 ([ab7b399](https://github.com/geostyler/geostyler-demo/commit/ab7b399224f428e31cc18332da69e952d178e01b)), closes [#132](https://github.com/geostyler/geostyler-demo/issues/132)
* **package:** update antd to version 3.20.0 ([5a78a2c](https://github.com/geostyler/geostyler-demo/commit/5a78a2ce9fbc1a4117276e19c788ce52d22811be))
* **package:** update antd to version 3.20.1 ([3d3f67e](https://github.com/geostyler/geostyler-demo/commit/3d3f67ec1d45e506263c84cb270534ace2863187))
* **package:** update geostyler to version 0.19.0 ([73d9c2a](https://github.com/geostyler/geostyler-demo/commit/73d9c2a3a3fe699da1d0983a056645e1b2439a31))
* **package:** update geostyler to version 0.21.0 ([098f252](https://github.com/geostyler/geostyler-demo/commit/098f25263b757b1887ef049cf047c01cbdfb389a))
* **package:** update geostyler to version 0.22.1 ([3aafc47](https://github.com/geostyler/geostyler-demo/commit/3aafc47897cc96bc8fc386534d3764bcd61d2711)), closes [#21](https://github.com/geostyler/geostyler-demo/issues/21)
* **package:** update geostyler to version 0.23.0 ([35703b9](https://github.com/geostyler/geostyler-demo/commit/35703b9b6a37eeb0ef8346db745af19a45e8ed72))
* **package:** update geostyler to version 0.24.0 ([8d5cb8a](https://github.com/geostyler/geostyler-demo/commit/8d5cb8a57187534084766a2717592d2e1badba18))
* **package:** update geostyler to version 0.26.0 ([bc518fe](https://github.com/geostyler/geostyler-demo/commit/bc518fe0f2a24218c6cda684f341092d248d7d20))
* **package:** update geostyler to version 0.27.1 ([5fbd4c5](https://github.com/geostyler/geostyler-demo/commit/5fbd4c59469e1887d7ae1cdc203bc02b31578ea6)), closes [#51](https://github.com/geostyler/geostyler-demo/issues/51)
* **package:** update geostyler to version 3.2.0 ([d8904e0](https://github.com/geostyler/geostyler-demo/commit/d8904e02dfce7027aafa89784886210e1e6d1def))
* **package:** update geostyler-geojson-parser to version 0.4.6 ([a96683f](https://github.com/geostyler/geostyler-demo/commit/a96683fc0a10f0fc7eb1057bf4c83bcdd7946fa2))
* **package:** update geostyler-geojson-parser to version 1.0.0 ([f9a52dc](https://github.com/geostyler/geostyler-demo/commit/f9a52dc2b9109988ded26fc919f8b158e6352bf1))
* **package:** update geostyler-sld-parser to version 0.17.3 ([44ce4fd](https://github.com/geostyler/geostyler-demo/commit/44ce4fd3d37df00e21f3db3bf5fcb0bf3ed3a18e))
* **package:** update geostyler-sld-parser to version 0.18.0 ([3b6db4c](https://github.com/geostyler/geostyler-demo/commit/3b6db4c2c49d94c8e15e7d9d767f514ec0487c12)), closes [#20](https://github.com/geostyler/geostyler-demo/issues/20)
* **package:** update geostyler-sld-parser to version 0.18.1 ([6806b50](https://github.com/geostyler/geostyler-demo/commit/6806b502976288c8618fdb9f6580362f77f2f949))
* **package:** update geostyler-sld-parser to version 1.3.0 ([9f58595](https://github.com/geostyler/geostyler-demo/commit/9f585955f9716439291f7d115aa07eb9bdda5fb4))
* **package:** update geostyler-sld-parser to version 2.0.0 ([276912a](https://github.com/geostyler/geostyler-demo/commit/276912af7d7b6e4be152ef0c4b49f250dfc2a3ee))
* **package:** update geostyler-style to version 0.14.3 ([7f6c43f](https://github.com/geostyler/geostyler-demo/commit/7f6c43fbffbae972dd70d6f28fc96a726d12f6a6))
* **package:** update geostyler-style to version 1.2.0 ([3ab0a36](https://github.com/geostyler/geostyler-demo/commit/3ab0a367ed693582d50a7eb27c30e5919df90697))
* **package:** update geostyler-style to version 1.2.1 ([487b2e1](https://github.com/geostyler/geostyler-demo/commit/487b2e1957ec53277d6a0ca0084684f8ac3fe297))
* **package:** update geostyler-style to version 2.0.0 ([edbf210](https://github.com/geostyler/geostyler-demo/commit/edbf2109c917588b2d2c5f88dd0865110b77970a))
* **package:** update geostyler-wfs-parser to version 1.0.0 ([f9f5694](https://github.com/geostyler/geostyler-demo/commit/f9f5694ee6944b47ba5bd3fe2487cb55a94f7f6d))
* **package:** update ol to version 5.3.1 ([5cdb52f](https://github.com/geostyler/geostyler-demo/commit/5cdb52fdfae145004c168cf782ef126c9216d9e8))
* **package:** update ol to version 5.3.2 ([c0653e4](https://github.com/geostyler/geostyler-demo/commit/c0653e42c2153c4dd2fa17d550cd1d4e87a48b7e))
* **package:** update ol to version 5.3.3 ([276e158](https://github.com/geostyler/geostyler-demo/commit/276e158399fd1ce66a763b621c2a8558ea71a30e))
* **package:** update react to version 16.7.0 ([9f8e367](https://github.com/geostyler/geostyler-demo/commit/9f8e367ed261c4d26c34b906ad1447eec30a9633))
* **package:** update react to version 16.8.1 ([b17ae69](https://github.com/geostyler/geostyler-demo/commit/b17ae69b75169f8300005e7c487360cd94875a3a)), closes [#79](https://github.com/geostyler/geostyler-demo/issues/79)
* **package:** update react to version 16.8.2 ([1278653](https://github.com/geostyler/geostyler-demo/commit/1278653b12decde1eef002d525d59360b9e11100))
* **package:** update react to version 16.8.3 ([6c0ce4d](https://github.com/geostyler/geostyler-demo/commit/6c0ce4da8d7b7c41b6a9740b8becc4a25a29ce72))
* **package:** update react to version 16.8.4 ([39a4f28](https://github.com/geostyler/geostyler-demo/commit/39a4f2801b2374614a24ca94915c0aaed0a01d7e))
* **package:** update react to version 16.8.5 ([abcbb52](https://github.com/geostyler/geostyler-demo/commit/abcbb52ab301a12d81c23ee3c8da3d86e14c844a))
* **package:** update react-dom to version 16.7.0 ([8e7b848](https://github.com/geostyler/geostyler-demo/commit/8e7b848eb5420b536babd693fc962ea099a7a778))
* **package:** update react-dom to version 16.8.1 ([5166066](https://github.com/geostyler/geostyler-demo/commit/5166066547058bac0a6786bf8fbd7cb56a8b7d2f)), closes [#79](https://github.com/geostyler/geostyler-demo/issues/79)
* **package:** update react-dom to version 16.8.2 ([8a51684](https://github.com/geostyler/geostyler-demo/commit/8a51684a2d0befa3cd147671721038e817853cec))
* **package:** update react-dom to version 16.8.3 ([a4105a9](https://github.com/geostyler/geostyler-demo/commit/a4105a9f5dd5893601693d49262a6fdd1a187fdf))
* **package:** update react-dom to version 16.8.4 ([6ccba3b](https://github.com/geostyler/geostyler-demo/commit/6ccba3b9c58cd5c93f80ed06b2e947dcef9c0668))
* **package:** update react-dom to version 16.8.5 ([69107c6](https://github.com/geostyler/geostyler-demo/commit/69107c671539f68fb7c4a68955469354c837c2af))
* **package:** update react-scripts to version 2.1.2 ([7cf453c](https://github.com/geostyler/geostyler-demo/commit/7cf453c0871fd373431fdfca2675dcdec3fa3a36))
* update geostyler & related dependencies ([adfc2d5](https://github.com/geostyler/geostyler-demo/commit/adfc2d54c7b0eed7a256dc363b3d070e4701ad53))

## [1.0.0-next.2](https://github.com/geostyler/geostyler-demo/compare/v1.0.0-next.1...v1.0.0-next.2) (2024-07-04)


### Bug Fixes

* update geostyler & related dependencies ([adfc2d5](https://github.com/geostyler/geostyler-demo/commit/adfc2d54c7b0eed7a256dc363b3d070e4701ad53))

## 1.0.0-next.1 (2024-06-21)


### ⚠ BREAKING CHANGES

* Uses the next major version of GeoStyler and the
related parser packages etc. If you want to include your custom
parser here, you'll probably have to depend on the next major
versions of all geostyler packages involved (ideally using an esm
build).
* the output files will be different

### Features

* switch between split, code, map and legend view with a group button instead of a accordion ([ced0095](https://github.com/geostyler/geostyler-demo/commit/ced0095fdc3c0e3cb692895f2c8a53420e71ca1e))
* switch to vite for build ([9d5499b](https://github.com/geostyler/geostyler-demo/commit/9d5499b117c7d3375ccedc47ff43ee8d9294d0d8))
* update geostyler & prepare for next release ([3430959](https://github.com/geostyler/geostyler-demo/commit/3430959a36643cf9a47be8f128738ca6ef6d50ab))
* update to geostyler v13 ([a8ea720](https://github.com/geostyler/geostyler-demo/commit/a8ea72019a185337631cba6c6a3b4c31f6aa8ca8))


### Bug Fixes

* add missing SLDRenderer config to context ([8b7542a](https://github.com/geostyler/geostyler-demo/commit/8b7542a560404b6b24a55c780c1e6dc84ce90f4f))
* add semantic release & commitlint dev packages ([0790220](https://github.com/geostyler/geostyler-demo/commit/0790220453cef785a0c3a20805aac41a13be0ce4))
* clone style where needed ([20c612d](https://github.com/geostyler/geostyler-demo/commit/20c612db8ef69238f31031638e4af54f957cd2c0))
* **deps:** update dependency geostyler to v13.1.1 ([54cebad](https://github.com/geostyler/geostyler-demo/commit/54cebad5ef114829666ff4744299c2c34d425dda))
* **deps:** update dependency geostyler-wfs-parser to v2.0.3 ([40e07b7](https://github.com/geostyler/geostyler-demo/commit/40e07b771a1bdddc97e4b26b21f069df8f333ce0))
* fix link to geostyler release in footer ([9e7f163](https://github.com/geostyler/geostyler-demo/commit/9e7f1631fbf106ac1e69750aebe09f0ac5858c2a))
* **package:** update @types/jest to version 23.3.10 ([36c2835](https://github.com/geostyler/geostyler-demo/commit/36c28351d553ebf16d84f802de5efa8295e1270e))
* **package:** update @types/jest to version 23.3.11 ([3b75440](https://github.com/geostyler/geostyler-demo/commit/3b75440f7d37ab8649677e2ebaf57c92fed006f0))
* **package:** update @types/jest to version 24.0.0 ([439fbaf](https://github.com/geostyler/geostyler-demo/commit/439fbaff437a991eec7e9acf6b459ac3efc48a06)), closes [#77](https://github.com/geostyler/geostyler-demo/issues/77)
* **package:** update @types/node to version 10.12.10 ([e40318a](https://github.com/geostyler/geostyler-demo/commit/e40318acbda15cc75918178aecc3cc30379658f6))
* **package:** update @types/node to version 10.12.11 ([d6c6143](https://github.com/geostyler/geostyler-demo/commit/d6c61438737420b152bc367f02cbb6ac2fc6687e))
* **package:** update @types/node to version 10.12.12 ([4208522](https://github.com/geostyler/geostyler-demo/commit/4208522195a26ffb79fff030334ec77e019fde40))
* **package:** update @types/node to version 10.12.14 ([dc6bb67](https://github.com/geostyler/geostyler-demo/commit/dc6bb6724b1b65b9322073d98d3a69b40bc41bdf)), closes [#47](https://github.com/geostyler/geostyler-demo/issues/47)
* **package:** update @types/node to version 10.12.15 ([31bbb99](https://github.com/geostyler/geostyler-demo/commit/31bbb9920a09e3f04a82f9f72a1664881eeeb1f5))
* **package:** update @types/node to version 10.12.18 ([7680ec6](https://github.com/geostyler/geostyler-demo/commit/7680ec63df8dbec557be2d4a1455e98dcbee3567))
* **package:** update @types/node to version 10.12.19 ([038cb6b](https://github.com/geostyler/geostyler-demo/commit/038cb6b0569b0a4e01f836bf66aea3f2068ce52a))
* **package:** update @types/node to version 10.12.20 ([f1f32e4](https://github.com/geostyler/geostyler-demo/commit/f1f32e4f4df948a5705e1ce073f9a2f3ba79f4d0))
* **package:** update @types/node to version 10.12.21 ([336d32a](https://github.com/geostyler/geostyler-demo/commit/336d32a6032b8ed02778940fdafaf4eed516a258))
* **package:** update @types/node to version 10.12.8 ([d03cd7c](https://github.com/geostyler/geostyler-demo/commit/d03cd7ca10d82abb685fc201a401c127771c161b))
* **package:** update @types/node to version 10.12.9 ([600fc48](https://github.com/geostyler/geostyler-demo/commit/600fc4817815e26186aea58e70a59a3448c191a6))
* **package:** update @types/react to version 16.7.17 ([95297ee](https://github.com/geostyler/geostyler-demo/commit/95297ee0ed3680d208c22c2c61ffbeecf343781b)), closes [#46](https://github.com/geostyler/geostyler-demo/issues/46)
* **package:** update @types/react to version 16.7.8 ([19f5e63](https://github.com/geostyler/geostyler-demo/commit/19f5e63447ee294008e543e8a8f9fceb2ea24bda)), closes [#14](https://github.com/geostyler/geostyler-demo/issues/14)
* **package:** update @types/react to version 16.8.6 ([b98a4bc](https://github.com/geostyler/geostyler-demo/commit/b98a4bc25a752d3774cb589dcfeca1f70ad560fe))
* **package:** update @types/react to version 16.8.7 ([f12ce98](https://github.com/geostyler/geostyler-demo/commit/f12ce987fe129595feff8735da1747e82e7339da))
* **package:** update @types/react to version 16.8.8 ([f775c44](https://github.com/geostyler/geostyler-demo/commit/f775c44464b92849cca82c4051f0fc9e122204a2))
* **package:** update @types/react-dom to version 16.0.10 ([15bfa01](https://github.com/geostyler/geostyler-demo/commit/15bfa01fc57d2573b8a673f4adb78aaa90285e3f))
* **package:** update @types/react-dom to version 16.0.11 ([63674d0](https://github.com/geostyler/geostyler-demo/commit/63674d03a277a58dae9fd0d72f1c83014c9ed9f9))
* **package:** update @types/react-dom to version 16.8.3 ([7298ed4](https://github.com/geostyler/geostyler-demo/commit/7298ed45916b6c4dbdc3e126631dc210fda42ffa))
* **package:** update @types/react-dom to version 16.8.4 ([25a7aef](https://github.com/geostyler/geostyler-demo/commit/25a7aef4702b562c899a379ee7689ece145d095b))
* **package:** update antd to version 3.10.8 ([0364f80](https://github.com/geostyler/geostyler-demo/commit/0364f802acc40ef55072b19f12ed44bd939945a4))
* **package:** update antd to version 3.10.9 ([db9abde](https://github.com/geostyler/geostyler-demo/commit/db9abde8decdffa94c09f4a93e6e09d5055e27d1))
* **package:** update antd to version 3.11.2 ([4db8430](https://github.com/geostyler/geostyler-demo/commit/4db84307dc23813eb2b1ae3c9e68fcc5bcf96067)), closes [#43](https://github.com/geostyler/geostyler-demo/issues/43)
* **package:** update antd to version 3.12.3 ([5f460ae](https://github.com/geostyler/geostyler-demo/commit/5f460ae8bb1cf8ed7e215874c01aae7469a0d5e5)), closes [#65](https://github.com/geostyler/geostyler-demo/issues/65)
* **package:** update antd to version 3.14.0 ([be545d3](https://github.com/geostyler/geostyler-demo/commit/be545d3baa17b6c1a2188408a6b5efb5f065a265))
* **package:** update antd to version 3.14.1 ([41016b4](https://github.com/geostyler/geostyler-demo/commit/41016b4a3ba3a5873c675060d4dc01b7c81334c4))
* **package:** update antd to version 3.15.0 ([82dc29d](https://github.com/geostyler/geostyler-demo/commit/82dc29d78f001908a5dcabae2c0c3156c126abce))
* **package:** update antd to version 3.15.1 ([06cedae](https://github.com/geostyler/geostyler-demo/commit/06cedaee74255f8b9e437cd5eb764fbeb205b086))
* **package:** update antd to version 3.15.2 ([cca4419](https://github.com/geostyler/geostyler-demo/commit/cca4419c6fc0b19259e3cc69d464000e63ab0913))
* **package:** update antd to version 3.18.2 ([2021045](https://github.com/geostyler/geostyler-demo/commit/20210452c3764520de29515d1e9a5d0320c312e5))
* **package:** update antd to version 3.19.1 ([dde63f3](https://github.com/geostyler/geostyler-demo/commit/dde63f3a8d94684f328c3620de7de62d70483beb)), closes [#123](https://github.com/geostyler/geostyler-demo/issues/123)
* **package:** update antd to version 3.19.2 ([38e8c99](https://github.com/geostyler/geostyler-demo/commit/38e8c99abc5b72b46a01835d435b44583230d5f0))
* **package:** update antd to version 3.19.3 ([3eca315](https://github.com/geostyler/geostyler-demo/commit/3eca315243d69070f707f0447c5e3d2c3676b639))
* **package:** update antd to version 3.19.5 ([f638bc9](https://github.com/geostyler/geostyler-demo/commit/f638bc9be63e5c723b5535f1e15dcb6b57ed6a1e)), closes [#129](https://github.com/geostyler/geostyler-demo/issues/129)
* **package:** update antd to version 3.19.6 ([6e0b7ac](https://github.com/geostyler/geostyler-demo/commit/6e0b7ac1514a36a33c439a5498976889b0186d02))
* **package:** update antd to version 3.19.8 ([ab7b399](https://github.com/geostyler/geostyler-demo/commit/ab7b399224f428e31cc18332da69e952d178e01b)), closes [#132](https://github.com/geostyler/geostyler-demo/issues/132)
* **package:** update antd to version 3.20.0 ([5a78a2c](https://github.com/geostyler/geostyler-demo/commit/5a78a2ce9fbc1a4117276e19c788ce52d22811be))
* **package:** update antd to version 3.20.1 ([3d3f67e](https://github.com/geostyler/geostyler-demo/commit/3d3f67ec1d45e506263c84cb270534ace2863187))
* **package:** update geostyler to version 0.19.0 ([73d9c2a](https://github.com/geostyler/geostyler-demo/commit/73d9c2a3a3fe699da1d0983a056645e1b2439a31))
* **package:** update geostyler to version 0.21.0 ([098f252](https://github.com/geostyler/geostyler-demo/commit/098f25263b757b1887ef049cf047c01cbdfb389a))
* **package:** update geostyler to version 0.22.1 ([3aafc47](https://github.com/geostyler/geostyler-demo/commit/3aafc47897cc96bc8fc386534d3764bcd61d2711)), closes [#21](https://github.com/geostyler/geostyler-demo/issues/21)
* **package:** update geostyler to version 0.23.0 ([35703b9](https://github.com/geostyler/geostyler-demo/commit/35703b9b6a37eeb0ef8346db745af19a45e8ed72))
* **package:** update geostyler to version 0.24.0 ([8d5cb8a](https://github.com/geostyler/geostyler-demo/commit/8d5cb8a57187534084766a2717592d2e1badba18))
* **package:** update geostyler to version 0.26.0 ([bc518fe](https://github.com/geostyler/geostyler-demo/commit/bc518fe0f2a24218c6cda684f341092d248d7d20))
* **package:** update geostyler to version 0.27.1 ([5fbd4c5](https://github.com/geostyler/geostyler-demo/commit/5fbd4c59469e1887d7ae1cdc203bc02b31578ea6)), closes [#51](https://github.com/geostyler/geostyler-demo/issues/51)
* **package:** update geostyler to version 3.2.0 ([d8904e0](https://github.com/geostyler/geostyler-demo/commit/d8904e02dfce7027aafa89784886210e1e6d1def))
* **package:** update geostyler-geojson-parser to version 0.4.6 ([a96683f](https://github.com/geostyler/geostyler-demo/commit/a96683fc0a10f0fc7eb1057bf4c83bcdd7946fa2))
* **package:** update geostyler-geojson-parser to version 1.0.0 ([f9a52dc](https://github.com/geostyler/geostyler-demo/commit/f9a52dc2b9109988ded26fc919f8b158e6352bf1))
* **package:** update geostyler-sld-parser to version 0.17.3 ([44ce4fd](https://github.com/geostyler/geostyler-demo/commit/44ce4fd3d37df00e21f3db3bf5fcb0bf3ed3a18e))
* **package:** update geostyler-sld-parser to version 0.18.0 ([3b6db4c](https://github.com/geostyler/geostyler-demo/commit/3b6db4c2c49d94c8e15e7d9d767f514ec0487c12)), closes [#20](https://github.com/geostyler/geostyler-demo/issues/20)
* **package:** update geostyler-sld-parser to version 0.18.1 ([6806b50](https://github.com/geostyler/geostyler-demo/commit/6806b502976288c8618fdb9f6580362f77f2f949))
* **package:** update geostyler-sld-parser to version 1.3.0 ([9f58595](https://github.com/geostyler/geostyler-demo/commit/9f585955f9716439291f7d115aa07eb9bdda5fb4))
* **package:** update geostyler-sld-parser to version 2.0.0 ([276912a](https://github.com/geostyler/geostyler-demo/commit/276912af7d7b6e4be152ef0c4b49f250dfc2a3ee))
* **package:** update geostyler-style to version 0.14.3 ([7f6c43f](https://github.com/geostyler/geostyler-demo/commit/7f6c43fbffbae972dd70d6f28fc96a726d12f6a6))
* **package:** update geostyler-style to version 1.2.0 ([3ab0a36](https://github.com/geostyler/geostyler-demo/commit/3ab0a367ed693582d50a7eb27c30e5919df90697))
* **package:** update geostyler-style to version 1.2.1 ([487b2e1](https://github.com/geostyler/geostyler-demo/commit/487b2e1957ec53277d6a0ca0084684f8ac3fe297))
* **package:** update geostyler-style to version 2.0.0 ([edbf210](https://github.com/geostyler/geostyler-demo/commit/edbf2109c917588b2d2c5f88dd0865110b77970a))
* **package:** update geostyler-wfs-parser to version 1.0.0 ([f9f5694](https://github.com/geostyler/geostyler-demo/commit/f9f5694ee6944b47ba5bd3fe2487cb55a94f7f6d))
* **package:** update ol to version 5.3.1 ([5cdb52f](https://github.com/geostyler/geostyler-demo/commit/5cdb52fdfae145004c168cf782ef126c9216d9e8))
* **package:** update ol to version 5.3.2 ([c0653e4](https://github.com/geostyler/geostyler-demo/commit/c0653e42c2153c4dd2fa17d550cd1d4e87a48b7e))
* **package:** update ol to version 5.3.3 ([276e158](https://github.com/geostyler/geostyler-demo/commit/276e158399fd1ce66a763b621c2a8558ea71a30e))
* **package:** update react to version 16.7.0 ([9f8e367](https://github.com/geostyler/geostyler-demo/commit/9f8e367ed261c4d26c34b906ad1447eec30a9633))
* **package:** update react to version 16.8.1 ([b17ae69](https://github.com/geostyler/geostyler-demo/commit/b17ae69b75169f8300005e7c487360cd94875a3a)), closes [#79](https://github.com/geostyler/geostyler-demo/issues/79)
* **package:** update react to version 16.8.2 ([1278653](https://github.com/geostyler/geostyler-demo/commit/1278653b12decde1eef002d525d59360b9e11100))
* **package:** update react to version 16.8.3 ([6c0ce4d](https://github.com/geostyler/geostyler-demo/commit/6c0ce4da8d7b7c41b6a9740b8becc4a25a29ce72))
* **package:** update react to version 16.8.4 ([39a4f28](https://github.com/geostyler/geostyler-demo/commit/39a4f2801b2374614a24ca94915c0aaed0a01d7e))
* **package:** update react to version 16.8.5 ([abcbb52](https://github.com/geostyler/geostyler-demo/commit/abcbb52ab301a12d81c23ee3c8da3d86e14c844a))
* **package:** update react-dom to version 16.7.0 ([8e7b848](https://github.com/geostyler/geostyler-demo/commit/8e7b848eb5420b536babd693fc962ea099a7a778))
* **package:** update react-dom to version 16.8.1 ([5166066](https://github.com/geostyler/geostyler-demo/commit/5166066547058bac0a6786bf8fbd7cb56a8b7d2f)), closes [#79](https://github.com/geostyler/geostyler-demo/issues/79)
* **package:** update react-dom to version 16.8.2 ([8a51684](https://github.com/geostyler/geostyler-demo/commit/8a51684a2d0befa3cd147671721038e817853cec))
* **package:** update react-dom to version 16.8.3 ([a4105a9](https://github.com/geostyler/geostyler-demo/commit/a4105a9f5dd5893601693d49262a6fdd1a187fdf))
* **package:** update react-dom to version 16.8.4 ([6ccba3b](https://github.com/geostyler/geostyler-demo/commit/6ccba3b9c58cd5c93f80ed06b2e947dcef9c0668))
* **package:** update react-dom to version 16.8.5 ([69107c6](https://github.com/geostyler/geostyler-demo/commit/69107c671539f68fb7c4a68955469354c837c2af))
* **package:** update react-scripts to version 2.1.2 ([7cf453c](https://github.com/geostyler/geostyler-demo/commit/7cf453c0871fd373431fdfca2675dcdec3fa3a36))
