<template>
  <div class="container content">
        <div id="title">{{$t('index.title')}}</div>
        <ul>
	<li>
		<nuxt-link class="shopji-link" :to="localePath('/terms')" target="_blank">{{$t('index.terms')}}</nuxt-link>
	</li>
	<li>
		<nuxt-link class="shopji-link" :to="localePath('/privacy')" target="_blank">{{$t('index.privacy')}}</nuxt-link>
	</li>
</ul>
    </div>
</template>

