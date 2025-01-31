# [1.18.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.17.0...v1.18.0) (2025-01-31)


### Features

* **cadastrarmedico.jsx:** checking if CPF and CRM inputs.length are < 11 ([3cbd059](https://github.com/luvsscorpius/organizaClinic/commit/3cbd0599b5784b8da1549e44ca2296ac1481b6cf))
* **cadastrarmedico.jsx:** using ...prev to add more than one doctor to array ([9050e44](https://github.com/luvsscorpius/organizaClinic/commit/9050e44e8294ad4a747d3e4c5a2d30156233f63f))
* **cadastrarmedicos.jsx:** using checkCPFsNCRMs to check if a doctor is already on database ([a76ffba](https://github.com/luvsscorpius/organizaClinic/commit/a76ffbaffb8d2e20ecfde584af7e5029d58335a1))
* **cadastrarpaciente.jsx:** creating a function to check if there's a CPF already in database ([5358353](https://github.com/luvsscorpius/organizaClinic/commit/535835354be504521d8b7f255330955b1acaa240))
* **cadastrarpaciente.jsx:** using (prev) => [...prev, newPatient] to add more than 1 patient ([d51a758](https://github.com/luvsscorpius/organizaClinic/commit/d51a75859f02e1ba4c34fb3fcd657052c97a6329))
* **context.jsx:** creating a new state on context.jsx to keep the patients ([87dc778](https://github.com/luvsscorpius/organizaClinic/commit/87dc778eeccfaec92c01d752f60a3100b8a169b4))
* **medicos.jsx:** using map to check the doctors on context and create new tr ([bbdff1e](https://github.com/luvsscorpius/organizaClinic/commit/bbdff1ef7283b1e03b0923ca862a7b41dfcf4056))
* **pacientes.jsx:** using map to check the patients and create more tr ([5b9a1d9](https://github.com/luvsscorpius/organizaClinic/commit/5b9a1d91dd2fea2e9143c816c951877078173d67))

# [1.17.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.16.0...v1.17.0) (2025-01-31)


### Features

* **styling:** finishing styling ([5fea38f](https://github.com/luvsscorpius/organizaClinic/commit/5fea38f1e25e2c12b988e557ead3e1b0578e489f))
* **theme:** implementing themes and variables ([3388f21](https://github.com/luvsscorpius/organizaClinic/commit/3388f210a90462d9fa528c5af6514de87b06ed0c))

# [1.16.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.15.0...v1.16.0) (2025-01-30)


### Features

* **agenda.jsx:** start event and end envent ([dee7260](https://github.com/luvsscorpius/organizaClinic/commit/dee72609af56ddd53b078ec806a37285db72867c))
* **editarmedico.jsx:** styling section to flexDirection column ([7427a1d](https://github.com/luvsscorpius/organizaClinic/commit/7427a1d7577bdc41ac6d7e3eb6d846469a528563))
* **editarpaciente.jsx:** setting new route and editing editarPaciente ([47db953](https://github.com/luvsscorpius/organizaClinic/commit/47db9536b4667b7927c5d3504e069806afd40dbc))
* **editarpaciente:** creating editarPaciente folder & files ([a965e6a](https://github.com/luvsscorpius/organizaClinic/commit/a965e6aa320e9fef131787bac1a3118beefea567))

# [1.15.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.14.0...v1.15.0) (2025-01-30)


### Features

* **mobile first:** finishing styling for tablets ([fa62021](https://github.com/luvsscorpius/organizaClinic/commit/fa6202186d4122ea17b21fbb8ba400b4be299065))
* **mobile first:** styling to desktop ([8fe3de4](https://github.com/luvsscorpius/organizaClinic/commit/8fe3de431011e92206f16268729b9b1de0969b06))

# [1.14.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.13.0...v1.14.0) (2025-01-28)


### Features

* **globalstyle.jsx:** centralizing body ([575e979](https://github.com/luvsscorpius/organizaClinic/commit/575e97983853a8749e425f61ac2963ba4aab6cd4))
* **mobile first:** implementing mobile first now to tablets ([0e458e3](https://github.com/luvsscorpius/organizaClinic/commit/0e458e36930334346d1d5f5d2748b4a3be021ab3))

# [1.13.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.12.0...v1.13.0) (2025-01-26)


### Features

* **context:** creating context folder and files ([f919e3d](https://github.com/luvsscorpius/organizaClinic/commit/f919e3dd443620f6c51e88419b62ecf0f00f726d))
* **nav.jsx:** creating a function called activeUpdate to fix bug when you change url active wouldnt ([109ea29](https://github.com/luvsscorpius/organizaClinic/commit/109ea298d6360711c4d2feb97cf3c5128175f3c4))

# [1.12.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.11.0...v1.12.0) (2025-01-25)


### Features

* **cadastrarpaciente.jsx:** adding a new input to get the date when the new patient was added ([f59eab4](https://github.com/luvsscorpius/organizaClinic/commit/f59eab4cee8826fa33aa1ee4ab868fe8c3c808b8))

# [1.11.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.10.0...v1.11.0) (2025-01-24)


### Features

* **cadastrarmedico.jsx:** implementing toastify container to catch errors ([655fe63](https://github.com/luvsscorpius/organizaClinic/commit/655fe633810c5fceddc350d36ae8fce3183b6a8f))
* **cadastrarpaciente.jsx:** dealing with error on cadastrarPacientes.jsx ([3954aa9](https://github.com/luvsscorpius/organizaClinic/commit/3954aa93e26c7e33b232a2410e0346c6fdd615ad))
* **nav.jsx:** removing padding from ul ([395b311](https://github.com/luvsscorpius/organizaClinic/commit/395b311ce4c64a5f62e2ee1e29f0b42aa54ead88))

# [1.10.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.9.0...v1.10.0) (2025-01-24)


### Features

* **cadastrarpaciente.jsx:** creating page to add new patients ([0335aef](https://github.com/luvsscorpius/organizaClinic/commit/0335aef1fe609bae4dcc38f7f647aa3286f7bf27))
* **cadastrarpaciente.jsx:** implementing form to add new patients ([5540754](https://github.com/luvsscorpius/organizaClinic/commit/55407543a15cd7f5d933c0c27e5303cba74e9086))
* **editarmedico.jsx:** creating editarmedico folder and files ([6dd852b](https://github.com/luvsscorpius/organizaClinic/commit/6dd852b6d8cc9e488f4bee4a77847bf8afbd302d))
* **nav.jsx & pacientes.jsx:** implementing logic on useEffect on nav.jsx and useNavigate pacientes ([cb852bb](https://github.com/luvsscorpius/organizaClinic/commit/cb852bb2d3fb1b67de544e073310c16f84a2b781))
* **nav.jsx:** implementing that if /medicos/editarmedico nav will be active on medicos ([92929ce](https://github.com/luvsscorpius/organizaClinic/commit/92929ce29590d6d8d17b5e80921942e82ab19ddc))

# [1.9.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.8.0...v1.9.0) (2025-01-23)


### Bug Fixes

* **nav.jsx:** fixing useEffect when pathUpdated[0] === '' we se activeName = 'Home'' ([3381a3f](https://github.com/luvsscorpius/organizaClinic/commit/3381a3f4e078c60a93eb28f55c981fade3c5a650))
* **nav.jsx:** updating pathway with pathArray[1] ([4396c19](https://github.com/luvsscorpius/organizaClinic/commit/4396c19cdb9cda6eba97f7242ad506e0ef9870a5))


### Features

* **cadastrarmedico.jsx:** implementing navigate('medicos') ([559188c](https://github.com/luvsscorpius/organizaClinic/commit/559188ca8404f1cc9c29bdb56d0150f8577a65b9))
* **cadastrarmedico:** implementing more inputs ([8425b74](https://github.com/luvsscorpius/organizaClinic/commit/8425b7444c2b4cee6a22d4ed239373b13d5d09bb))
* **medicos.jsx:** implementing new td ([127aa04](https://github.com/luvsscorpius/organizaClinic/commit/127aa04c662cad5eed6b26e0731a7f2943934bf8))
* **pacientes.jsx:** implementing table from tailwind ([e61f681](https://github.com/luvsscorpius/organizaClinic/commit/e61f6816f344f865917749dfcc13e8027590e34a))

# [1.8.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.7.0...v1.8.0) (2025-01-23)


### Bug Fixes

* **nav.jsx:** implenting that if pathname is cadastrarmedicos li medicos will stay active ([7dfb349](https://github.com/luvsscorpius/organizaClinic/commit/7dfb349d2a621699e7692b0c5c64073e5c2e7d1c))


### Features

* **app.js:** implementing subroutes & creating cadastrarmedico.jsx ([30b975a](https://github.com/luvsscorpius/organizaClinic/commit/30b975adf2af9ac93475200fdc1331299b2e8662))
* **cadastrarmedico.jsx:** implementing form to cadastrarMedico.jsx ([c6ad76b](https://github.com/luvsscorpius/organizaClinic/commit/c6ad76bcf7aa9c605ee9ec34f0e23bfc04ca40f0))
* **index.html:** implementing poppins font ([9f5518d](https://github.com/luvsscorpius/organizaClinic/commit/9f5518d78c88c8a38ad09de5dd82467076eea2b9))
* **medicos.jsx:** implementing table from tailwind ([e7cb480](https://github.com/luvsscorpius/organizaClinic/commit/e7cb4806c80b126b7d063bbd347840a1e08943a4))

# [1.7.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.6.0...v1.7.0) (2025-01-22)


### Features

* **medicos.jsx:** implementing searchInput and button ([de183e9](https://github.com/luvsscorpius/organizaClinic/commit/de183e96e67a593ded9b005f238275567571cce9))

# [1.6.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.5.1...v1.6.0) (2025-01-21)


### Features

* **agenda.jsx:** implementing modal ([5157986](https://github.com/luvsscorpius/organizaClinic/commit/5157986c01a9a861512d7aa56f6136f22205d8cc))
* **agenda.jsx:** implemeting logic to add new event to calendar ([f547c4c](https://github.com/luvsscorpius/organizaClinic/commit/f547c4c0cf3ee66329f1544714f94308cfc03cf2))

## [1.5.1](https://github.com/luvsscorpius/organizaClinic/compare/v1.5.0...v1.5.1) (2025-01-21)


### Bug Fixes

* **nav.jsx:** using useeffect to put active name when page is realoaded ([bc82075](https://github.com/luvsscorpius/organizaClinic/commit/bc82075005d069dfe69369c6e1c1712eb14b2161))

# [1.5.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.4.0...v1.5.0) (2025-01-19)


### Features

* **medicos:** creating medicos folder and files ([79a07af](https://github.com/luvsscorpius/organizaClinic/commit/79a07af1aa2638608819391625920e80447c146c))
* **pacientes:** creating pacientes folder and files ([827bba8](https://github.com/luvsscorpius/organizaClinic/commit/827bba890f0af8ace505a096e6a7a7b15f675f12))

# [1.4.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.3.0...v1.4.0) (2025-01-19)


### Features

* **agenda:** agenda.jsx ([d5e4e05](https://github.com/luvsscorpius/organizaClinic/commit/d5e4e0579f629dce15220f21e88c3b967263b4f5))

# [1.3.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.2.0...v1.3.0) (2025-01-19)


### Features

* **home.jsx:** disabled and bookedays ([473be50](https://github.com/luvsscorpius/organizaClinic/commit/473be50e077e025cc15aeaa5b2f9dfde359e19e6))

# [1.2.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.1.0...v1.2.0) (2025-01-19)


### Features

* **home.jsx:** margin auto and width 95% ([a43936f](https://github.com/luvsscorpius/organizaClinic/commit/a43936fb5ca61692746f705c8b0b705358469593))
* **home.jsx:** margin-top on container and gap 20p ([9f4b273](https://github.com/luvsscorpius/organizaClinic/commit/9f4b27392bf25900cd63dcdda053537cf651cb36))

# [1.1.0](https://github.com/luvsscorpius/organizaClinic/compare/v1.0.0...v1.1.0) (2025-01-19)


### Features

* **daypicker:** implementing daypicker and order on containers ([01e3e26](https://github.com/luvsscorpius/organizaClinic/commit/01e3e2619c4a34e5871f977b0361cb19eaaa10a7))
* **mobile first:** implementing new page and styling in mobile first ([58bc4c4](https://github.com/luvsscorpius/organizaClinic/commit/58bc4c40b496179df1511574a2604a7df05d4860))

# 1.0.0 (2025-01-18)


### Features

* **initial commit:** starting organizaClinic repo ([7fd5587](https://github.com/luvsscorpius/organizaClinic/commit/7fd55877806a62a49b267d05801fe92de2e7f785))
