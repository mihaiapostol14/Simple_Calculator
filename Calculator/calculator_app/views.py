from django.views.generic import TemplateView

from .utils import CalculatorMixin


class CalculatorView(CalculatorMixin, TemplateView):
    template_name = 'calculator_app/calculator.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return self.get_mixin_context(context=context, title='Calculator')