<script>
  export let service;
  const {title, description, icon} = service;
  import img1 from "$lib/images/item3.jpg";

</script>

<div class="service_card min-h-[480px] h-[480px] w-[380px] max-w-[380px] relative rounded-[20px] bg-[rgba(255,255,255,.1)] p-[5px] border-[1px] border-gray-800">
    <div class="service_card-front bg-[#090121] rotate-0 flex flex-col h-full rounded-[20px] border-[1px] border-gray-800">
        <div class="service_card-image absolute top-0 left-0 right-0 bottom-0 opacity-50 overflow-hidden rounded-[20px] grayscale-[50%]">
            <img src={img1} alt="" class="h-full w-full bg-cover">
        </div>
    </div>
</div>