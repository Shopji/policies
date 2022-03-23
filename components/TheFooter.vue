<template>
  <div id="footer" style="position: relative">
        <div id="footerLinks">



                    <a target="_blank" href="https://shopji.co"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{$t('footer.mall')}}</font></font></a>

                    <a target="_blank" :href="'https://shopji.co/partners/'+$i18n.locale"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{$t('footer.partner')}}</font></font></a>

                    <nuxt-link target="_blank" :to="localePath('/')"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">{{$t('footer.policy')}}</font></font></nuxt-link>



        </div>
        <div id="addressAtFooter">

        </div>
    </div>
</template>
