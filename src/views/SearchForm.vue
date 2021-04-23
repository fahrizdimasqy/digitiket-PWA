<template>
    <div>
        <section class="bg-primary py-3">
            <b-navbar :sticky="true">
                <b-nav class="align-items-center w-100">
                    <b-navbar-nav @click="$router.go(-1)" class="col-1">
                        <b-icon-chevron-left
                            variant="white"
                            font-scale="2"
                        ></b-icon-chevron-left>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-3 col-10">
                        <b-input
                            type="search"
                            placeholder="Cari . . ."
                            v-model="value"
                        ></b-input>
                    </b-navbar-nav>
                </b-nav>
            </b-navbar>
        </section>
        <section>
            <p
                class="ml-3 text-left text-secondary pt-3"
                v-if="lastSeen.length > 0 || value.length > 2"
            >
                <small>Terakhir dilihat</small>
            </p>
            <b-list-group flush v-if="value.length < 3">
                <b-list-group-item
                    class="d-flex justify-content-between align-items-center"
                    v-for="query in lastSeen"
                    :key="query.name"
                    :to="query.path"
                >
                    <span>{{ query.name }}</span>
                    <span
                        ><b-icon-x
                            font-scale="2"
                            variant="secondary"
                            @click="deleteLastSeenItem(query.name)"
                        ></b-icon-x
                    ></span>
                </b-list-group-item>
            </b-list-group>
            <b-list-group flush v-else>
                <b-list-group-item class="text-left"
                    v-for="query in database"
                    :key="query.name"
                    :to="query.path"
                >
                    <p class="mb-0 font-weight-bold">{{ query.name }}</p>
                    <p class="mb-0 text-secondary"><small>{{ query.location }}</small></p>
                </b-list-group-item>
            </b-list-group>
        </section>
    </div>
</template>
<script>
export default {
    name: "SearchForm",
    data() {
        return {
            database: [
                {
                    name: "Rinjani Waterpark",
                    location: "Lombok Timur, Nusa Tenggara Barat",
                    path: "/search?q=rinjani",
                },
                {
                    name: "Rinjani Treking Package 3D2N",
                    location: "Lombok Timur, Nusa Tenggara Barat",
                    path: "/search?q=rinjani",
                },
                {
                    name: "Rinjani Treking Package 2D1N",
                    location: "Lombok Timur, Nusa Tenggara Barat",
                    path: "/search?q=rinjani",
                },
                {
                    name: "Virtual Tour Candi Borobudur",
                    location: "Magelang, Jawa Tengah",
                    path: "/search?q=candi",
                },
                {
                    name: "Virtual Tour Candi Prambanan",
                    location: "Lombok Timur, Nusa Tenggara Barat",
                    path: "/search?q=candi",
                },
            ],
            lastSeen: [
                {
                    name: "Rinjani",
                    path: "/search?q=rinjani",
                },
                {
                    name: "Candi Prambanan",
                    path: "/search?q=candi%20prambanan",
                },
                {
                    name: "Raja Ampat",
                    path: "/search?q=raja%20ampat",
                },
            ],
            value: "",
        };
    },
    methods: {
        deleteLastSeenItem(name) {
            this.lastSeen.filter((x, i) => {
                if (x.name === name) this.lastSeen.splice(i, 1);
            });
        },
    },
};
</script>