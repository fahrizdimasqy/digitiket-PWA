<template>
    <div>
        <h2 class="font-weight-bolder px-4 text-left">Lokasi Rinjani Waterpark</h2>
        <p class="text-left mb-0 pl-4" v-for="i in alamat.split(',')" :key="i">{{ i }}</p>
        <div class="mapouter mt-4 text-left mx-4">
            <div class="gmap_canvas">
                <iframe
                    width="100%"
                    height="250"
                    id="gmap_canvas"
                    :src="`https://maps.google.com/maps?q=${alamat.split(' ').join('%20')}&t=&z=13&ie=UTF8&iwloc=&output=embed`"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                ></iframe>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            alamat:
                "Selong, JI. Pajanggik. Majidi Selang, Lombok Timur - Nusa Tenggara Barat",
        };
    },
};
</script>

