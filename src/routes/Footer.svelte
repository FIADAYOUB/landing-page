<script>
  import dayjs from 'dayjs';

</script>
<div class="bg-black  lg:px-28 pt-14 px-10 pb-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
      <div>
        <h1 class="text-white font-semibold lg:text-2xl">lorem ipsum</h1>
        <p class="text-tertiary-darken4 xl:w-[559px] pt-4">
          We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <div class="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-1 md:grid-cols-1 pt-9">
          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white bg-tertiary-darken4 rounded-full leading-4 p-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div>
              <p class="text-tertiary-darken4 text-sm">Have a question?</p>
              <h3 class="text-white">000-000-0000</h3>
            </div>
          </div>

          <div class="flex gap-2 text-white md:pt-4 pt-4 xl:pt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white bg-tertiary-darken4 rounded-full leading-4 p-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <div>
              <p class="text-tertiary-darken4 text-sm">Contact us at</p>
              <h3>lorem.ipsum@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h2 class="text-white font-semibold lg:text-xl md:pt-4 pt-4">
            Newsletter
          </h2>
          <p class="text-tertiary-darken4 xl:w-[555px] pt-4 pb-5">
            Be the first one to know about discounts, offers and events.
            Unsubscribe whenever you like.
          </p>
          <div class="relative">
            <input
              type="text"
              placeholder="Enter your email"
              class="rounded-full px-4 py-3 bg-secondary-base w-full text-white"
            />
            <button class="text-white md:px-7 md:py-3 px-3 py-3 text-xs md:text-base rounded-full bg-primary-base absolute right-2 submit-btn hover:text-white c-btn tracking-wider overflow-hidden">
              <span class="absolute inset-0 bg-primary-base"></span>
              <span class="absolute inset-0 flex justify-center items-center">
                Submit
              </span>
              Submit
            </button>
          </div>
        </div>

        <div class="flex justify-end pt-5 gap-4 socials">
          <div class="relative overflow-hidden block footer-div cursor-pointer">
            <span class="block">
              Facebook
            </span>
            <span>

            </span>
          </div>
          <div class="relative overflow-hidden block footer-div cursor-pointer">
            <span class="block">
              Youtube
            </span>
            <span>

            </span>
          </div>
          <div class="relative overflow-hidden block footer-div cursor-pointer">
            <span class="block">
              Skype
            </span>
            <span>

            </span>
          </div>
          <div class="relative overflow-hidden block footer-div cursor-pointer">
            <span class="block">
              Figma
            </span>
            <span>

            </span>
          </div>
          <div class="relative overflow-hidden block footer-div cursor-pointer">
            <span class="block">
              Whatsapp
            </span>
            <span>

            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid lg:grid-cols-2 grid-cols-1 pt-16 md:grid-cols-1">
      <div class="md:flex justify-between text-tertiary-darken4 text-xs md:text-base flex-col lg:flex-row">
        <p>About Us</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Sitemap</p>
        <p>Terms of Use</p>
      </div>
      <div class="text-tertiary-darken4 lg:justify-end justify-start pt-4 flex md:justify-start md:pt-4 text-xs md:text-base lg:pt-0">
        © {dayjs().format('YYYY')}, All Rights Reserved
      </div>
    </div>
</div>