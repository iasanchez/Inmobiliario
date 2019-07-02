<template>
	<div>
		<headerAPP/>
		<nuxt/>
		<footerAPP/>
	</div>
</template>


<script>
import HeaderAPP from "~/components/_header.vue";
import FooterAPP from "~/components/_footer.vue";

export default {
	components: {
		HeaderAPP,
		FooterAPP
	}
};
</script>
