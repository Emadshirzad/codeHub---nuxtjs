<script setup>
const state = ref(0)
</script>

<template>
    <div class="w-full h-svh overflow-hidden">
        <section class="flex justify-center items-center gap-20 mt-2">
            <div class="bg-[#11141A] w-96 h-[37rem] rounded-xl">
                <div class="flex justify-center items-center my-4 *:mx-4 *:w-20 *:text-center *:font-semibold">
                    <NuxtLink to="/login" class="text-2xl">ورود</NuxtLink>
                    <NuxtLink to="/register" class="text-2xl active">ثبت نام</NuxtLink>
                </div>
                <form class="flex flex-col items-center *:mt-4" action="">
                    <div>
                        <h2 class="mb-3">ایمیل :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none p-4">
                            <input type="text" class="grow" placeholder="codeHub@gmail.com" />
                        </label>
                    </div>
                    <div>
                        <h2 class="mb-3">نام و نام خانوادگی (فارسی) :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none p-4">
                            <input type="text" class="grow" placeholder="عماد شیرزاد" />
                        </label>
                    </div>
                    <div>
                        <h2 class="mb-3">رمز عبور :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none p-4">
                            <div v-if="state != 1" class="flex">
                                <Icon @click="state = 1" name="mage:eye-fill"
                                    class="w-6 h-6 active:-rotate-90 transition-all" />
                            </div>
                            <div v-else class="flex">
                                <Icon @click="state = 0" name="mage:eye-off"
                                    class="w-6 h-6 active:rotate-90 transition-all" />
                            </div>
                            <input :type="state == 1 ? 'text' : 'password'" class="grow" />
                        </label>
                    </div>
                    <div>
                        <h2 class="mb-3">تکرار رمز عبور :</h2>
                        <label
                            class="input input-sm bg-transparent input-bordered flex items-center w-80 !border-[#cecece] !outline-none p-4">
                            <div v-if="state != 1" class="flex">
                                <Icon @click="state = 1" name="mage:eye-fill"
                                    class="w-6 h-6 active:-rotate-90 transition-all" />
                            </div>
                            <div v-else class="flex">
                                <Icon @click="state = 0" name="mage:eye-off"
                                    class="w-6 h-6 active:rotate-90 transition-all" />
                            </div>
                            <input :type="state == 1 ? 'text' : 'password'" class="grow" />
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
                        <Icon name="logos:google-icon" class="w-4 h-4" />
                        <NuxtLink to="">ثبت نام با گوگل</NuxtLink>
                    </div>
                    <div
                        class="!flex !items-center btn hover:!bg-[#4FC3F7] hover:!border-none hover:text-black !bg-transparent text-white !min-h-2 h-10">
                        <Icon name="bx:bxl-github" class="w-6 h-6" />
                        <NuxtLink to="">ثبت نام با گیتهاب</NuxtLink>
                    </div>
                </form>
            </div>
            <div class="flex flex-col items-center ">
                <img src="/assets/img/logo.svg" alt="" />
                <img src="/assets/img/team.svg" alt="" />
            </div>
        </section>
    </div>
</template>

<style>
.active {
    @apply border-b-2 border-[#4FC3F7] text-[#4FC3F7];
}
</style>
