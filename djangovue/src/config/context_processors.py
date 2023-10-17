from django.conf import settings


def vue_js_files(request):
    static_base_dir = settings.STATICFILES_BASE_DIRS
    
    vue_name = 'vue-prod' if settings.VUE_DEBUG else 'vue-dev'
    veu_dir = static_base_dir / vue_name /'assets'

    js_files = [x.relative_to( static_base_dir) for x in  veu_dir.glob("**/*.js")]
    css_files = [x.relative_to( static_base_dir) for x in  veu_dir.glob("**/*.css")]

    return {
        "vue_js_paths": list(js_files),
        "vue_css_paths": list(css_files)
    }