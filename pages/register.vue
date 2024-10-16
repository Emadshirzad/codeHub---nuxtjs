<script lang="ts" setup></script>

<template>
    <div class="w-full h-[100vh]">
        <section class="flex justify-center items-center ">
            <div class="bg-[#11141A] w-96 h-[600px] rounded-xl">
                <div class="flex justify-center items-center my-8 *:mx-4 *:w-20 *:text-center *:font-semibold">
                    <NuxtLink to="/login" class="text-2xl">ورود</NuxtLink>
                    <NuxtLink to="/register" class="text-2xl active">ثبت نام</NuxtLink>
                </div>
                <form class="flex flex-col items-center *:mt-4" action="">
                    <div>
                        <h2 class="mb-3">ایمیل :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none">
                            <input type="text" class="grow" placeholder="codeHub@gmail.com" />
                        </label>
                    </div>
                    <div>
                        <h2 class="mb-3">نام و نام خانوادگی (فارسی) :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none">
                            <input type="text" class="grow" placeholder="عماد شیرزاد" />
                        </label>
                    </div>
                    <div>
                        <h2 class="mb-3">رمز عبور :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none">
                            <Icon name="ph:eye-slash" class="w-6 h-6" />
                            <input type="text" class="grow" />
                        </label>
                    </div>
                    <div>
                        <h2 class="mb-3">تکرار رمز عبور :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none">
                            <Icon name="ph:eye-light" class="w-6 h-6" />
                            <input type="text" class="grow" />
                        </label>
                    </div>
                    <NuxtLink to=""
                        class="my-2 btn !bg-[#4FC3F7] hover:!bg-[#4fc2f7c0] w-44 !min-h-2 h-10 text-lg text-black border-none">
                        ثبت
                        نام
                    </NuxtLink>
                    <div class="w-full flex *:mx-4 items-center">
                        <p class="w-1/2 h-[1px] bg-[#F8F8F8]"></p>
                        <p>یا</p>
                        <p class="w-1/2 h-[1px] bg-[#F8F8F8]"></p>
                    </div>
                </form>
                <form action="" class="flex items-center justify-center *:mx-2 mt-3">
                    <div
                        class="!flex !items-center btn hover:!bg-[#4FC3F7] hover:!border-none hover:text-black !bg-transparent text-white !min-h-2 h-10">
                        <NuxtLink to="">ثبت نام با گوگل</NuxtLink>
                        <Icon name="logos:google-icon" class="w-4 h-4 mr-2" />
                    </div>
                    <div
                        class="!flex !items-center btn hover:!bg-[#4FC3F7] hover:!border-none hover:text-black !bg-transparent text-white !min-h-2 h-10">
                        <NuxtLink to="">ثبت نام با گیتهاب</NuxtLink>
                        <Icon name="bx:bxl-github" class="w-6 h-6 mr-2" />
                    </div>
                </form>
            </div>
            <div class="flex flex-col items-center mr-20">
                <img class="mt-14" src="/assets/img/logo.svg" alt="" />
                <img class="mt-14" src="/assets/img/team.svg" alt="" />
            </div>
        </section>
    </div>
</template>

<style>
.active {
    @apply border-b-2 border-[#4FC3F7] text-[#4FC3F7];
}
</style>
