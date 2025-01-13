from django.views.generic import TemplateView

from .utils import Calculator2Mixin


class Calculator2View(Calculator2Mixin, TemplateView):
    template_name = 'calculator_app2/calculator.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return self.get_mixin_context(context=context, title='Calculator')