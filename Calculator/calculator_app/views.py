from django.shortcuts import render


def calculator(request) -> render:
    context = {
        'title': 'Calculator'
    }
    return render(request=request, template_name='calculator_app/calculator.html',context=context)
