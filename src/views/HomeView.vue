<script setup lang="ts">
    import { ref , onMounted } from "vue"
    import { Database , Reference , onValue } from '../firebase.js'
    const home = ref( {
        app_infos: {
            background : "https://placehold.co/600x1200",
            logo : "https://placehold.co/400x150",
            name : "green",
            phone : 111122233445566,
            slogan : "will make your life tasty"
        },
        aboutus : {
            title       : null ,
            subheading  : null ,
            description : null ,
            slides      : [ ]  ,
        } ,
        order : {
            title       : "give us uo order"          ,
            description : "will make your life tasty"
        } ,
        prodect : [ ]  ,
        recipes : [ ]  ,
    } ) ;
    onValue( Reference( Database , 'home' ) , ( snapshot ) => {
        home.value = snapshot.val( );
        console.log( home.value )
    });
    const aboutus = ref( 'will make your life tasty '.repeat( 100 ) )
    const isOpen = ref( false )
</script>

<template> <div class="container mx-auto">
    <nav class="relative bg-white shadow">
        <div class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
            <div class="flex items-center justify-between">
                <a href="#">
                    <img class="w-auto h-6 sm:h-7" :src="home.app_infos.logo" alt="logo">
                </a>
                <!-- Mobile menu button -->
                <div class="flex lg:hidden">
                    <button v-cloak @click="isOpen = !isOpen" type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                        <svg v-show="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                        </svg>

                        <svg v-show="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
            <div v-cloak :class="[isOpen ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full']" class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                <div class="flex flex-col md:flex-row md:mx-6">
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#aboutus" > About us    </a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#prodect" > our prodect </a>
                    <a class="my-2 text-gray-700 transition-colors duration-300 transform hover:text-blue-500 md:mx-4 md:my-0" href="#recipes" > recipes     </a>
                </div>
            </div>
        </div>
    </nav>
    <div class="relative grid h-[40rem] w-full flex-col items-end justify-center overflow-hidden bg-white bg-clip-border text-center text-gray-700">
        <img class="absolute inset-0 m-0 w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none" :src="home.app_infos.background" alt="logo">
        <div class="relative p-6 py-14 px-6 md:px-12">
            <h4 class="mb-4 block font-sans text-9xl font-bold leading-snug tracking-normal text-gray-400 antialiased uppercase" v-text="home.app_infos.name" />
            <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white uppercase" v-text="home.app_infos.slogan" />
        </div>
    </div>
    <div id="aboutus" style="padding: 45px;" class="bg-[#00d687] relative grid w-full flex-col overflow-hidden bg-clip-border text-center text-gray-700" >
        <div>
            <h4 class="mb-4 block font-sans text-7xl font-bold leading-snug tracking-normal antialiased uppercase" v-text="home.aboutus.title" />
            <h2 class="mb-6 block font-sans text-lg font-medium leading-[1.5] tracking-normal text-white uppercase" v-text="home.aboutus.description" />
        </div>
        <div class="carousel w-full">
            <carousel-3d :autoplay="true" :autoplay-timeout="5000" :controls-visible="true" :clickable="false" >
                <slide v-for="( slide , i ) in home.aboutus.slides" :index="i" :key="i">
                    <img        :src="slide.src"           />
                    <div v-text="slide.description" style="position: absolute; background-color: rgba(0, 0, 0, 0.5); color: #fff; bottom: 0; position: absolute; bottom: 0; padding: 15px; font-size: 12px; min-width: 100%; box-sizing: border-box;" />
                </slide>
            </carousel-3d>
            <h2 class="mb-6 block font-sans text-lg font-medium leading-[1.5] tracking-normal uppercase" v-text="home.aboutus.subheading" />
        </div>
    </div>
    <div id="prodect" style="margin: 45px 0; box-shadow: none; padding: 20px;" class="relative grid w-full flex-col overflow-hidden bg-clip-border text-center text-gray-700 grid grid-cols-3 gap-4" >
        <div v-for="( item , i ) in home.prodect" :key="i" class="text-center relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img :src="item.src" alt="profile-picture" />
            </div>
            <div class="p-6 text-center">
                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Natalie Paisley
                </h4>
                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                CEO / Co-Founder
                </p>
            </div>
            <div class="flex justify-center gap-7 p-6 pt-2">
                <a class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
                    order now
                </a>
            </div>
        </div>
    </div>
    <div id="form" class="bg-[#00d687] relative w-full flex-col overflow-hidden text-center text-gray-700" >
        <div>
            <h4 class="mb-4 block font-sans text-7xl font-bold leading-snug tracking-normal antialiased uppercase"  v-text="home.order.title" />
            <h2 class="mb-6 block font-sans text-lg font-medium leading-[1.5] tracking-normal text-white uppercase" v-text="home.order.description" />
        </div>
        <section class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md ">
            <h2 class="text-lg font-semibold text-gray-700 capitalize ">order now</h2>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700" for="name">name</label>
                    <input id="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-700" for="email">email</label>
                    <input id="email" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-700" for="address">address</label>
                    <input id="address" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                </div>
                <div>
                    <label class="text-gray-700" for="phone">phone</label>
                    <input id="phone" type="password" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring">
                </div>
            </div>
            <div class="grid grid-cols-12 gap-0 mt-4 sm:grid-cols-1">
                <a class="px-6 py-2 my-8 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
                    order now
                </a>
            </div>
        </section>
        <nav class="bg-amber-300">
            <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize ">
                <div class="text-lime-800 transition-colors duration-300 transform mx-1.5 sm:mx-6 text-7xl uppercase" >try our recipes</div>
            </div>
        </nav>
        <nav class="bg-lime-800">
            <div>|</div>
        </nav>
    </div>
    <div id="recipes" style="margin: 45px 0; box-shadow: none; padding: 20px;" class="relative grid w-full flex-col overflow-hidden bg-clip-border text-center text-gray-700 grid grid-cols-3 gap-4" >
        <div v-for="( item , i ) in home.recipes" :key="i" class="text-center relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <img :src="item.src" alt="profile-picture" />
            </div>
            <div class="p-6 text-center">
                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" v-text="item.title" />
                <p class="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased" v-text="item.description" />
            </div>
            <div class="flex justify-center gap-7 p-6 pt-2">
                <a class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80" >
                    order now
                </a>
            </div>
        </div>
    </div>
    <div id="footer" class="bg-[#001707] text-gray-400" >
        <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                <div class="sm:col-span-2">
                    <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
                        <img class="w-auto h-6 sm:h-7" :src="home.app_infos.logo" alt="logo">
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-500 uppercase" v-text="home.app_infos.name" />
                    </a>
                    <div class="mt-6 lg:max-w-sm">
                        <p class="text-sm text-gray-500" v-text="home.app_infos.description" />
                    </div>
                </div>
                <div class="space-y-2 text-sm">
                    <p class="text-base font-bold tracking-wide text-gray-400">Contacts</p>
                    <div class="flex">
                        <p class="mr-1 text-gray-500">Phone:</p>
                        <a :href="'tel:' + home.app_infos.phone" aria-label="Our phone" title="Our phone" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800" v-text="home.app_infos.phone" />
                    </div>
                    <div class="flex">
                        <p class="mr-1 text-gray-500">Email:</p>
                        <a :href="'mailto:' + home.app_infos.email" aria-label="Our email" title="Our email" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800" v-text="home.app_infos.email" />
                    </div>
                    <div class="flex">
                        <p class="mr-1 text-gray-500">Address:</p>
                        <a :href="home.app_infos.address" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" class="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800" v-text="home.app_infos.address" />
                    </div>
                </div>
                <div>
                    <span class="text-base font-bold tracking-wide text-gray-400">Social</span>
                    <div class="flex items-center mt-1 space-x-3 text-2xl">
                        <a :href="home.app_infos.facebook" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <i class="fab fa-facebook"/>
                        </a>
                        <a :href="home.app_infos.instagram" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <i class="fab fa-instagram"/>
                        </a>
                        <a :href="home.app_infos.twitter" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <i class="fab fa-twitter"/>
                        </a>
                        <a :href="'tel:' + home.app_infos.phone" class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
                            <i class="fab fa-whatsapp"/>
                        </a>
                    </div>
                </div>
            </div>
            <div class="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p class="text-sm text-gray-600" v-text="home.app_infos.Copyright" />
            </div>
        </div>
    </div>
</div> </template>