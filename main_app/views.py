from django.shortcuts import HttpResponse, HttpResponseRedirect, render
from django.urls import reverse
from django.views.defaults import page_not_found

from .services import _services, sp_services
from .services import tabs
from random import randrange

# Create your views here.

def error_404_view(request, exception):
   
    # we add the path to the 404.html file
    # here. The name of our HTML file is 404.html
    return render(request, '404.html')

def index(request):
    tabservices = tabs
    tabservices_title = list(tabs.keys())
    context = {
        "titles": tabservices_title,
        "tabs": tabservices,
        "title": "Home",
        "link": "index"
    }
    return render(request, 'main_app/index.html', context)


def about(request):
    tabservices = tabs
    tabservices_title = list(tabs.keys())
    context = {
        "titles": tabservices_title,
        "tabs": tabservices,
        "title": "About Us",
        "crumb_to": "Home",
        "link": "index"
    }
    return render(request, 'main_app/about.html', context)


def about_more(request, about_var):
    if about_var in "teams":
        context = {
            "title": "Team",
            "crumb_to": "Home",
            "link": "index",
            "subtitle": "The Team",
            "crumb_to": "Home",
            "crumb_to_previous": "About",
            "prev_link": "about",
        }
        return render(request, 'main_app/about-team.html', context)
    elif about_var in "faq" or about_var in "frequently asked questions" or about_var in "faqs":
        context = {
            "title": "FAQs",
            "crumb_to": "Home",
            "link": "index",
            "subtitle": "FAQs",
            "crumb_to": "Home",
            "crumb_to_previous": "About",
            "prev_link": "about",
        }
        return render(request, 'main_app/about-faq.html', context)
    elif about_var in "testimonials":
        context = {
            "title": "Testimonials",
            "crumb_to": "Home",
            "link": "index",
            "subtitle": "Testimonials",
            "crumb_to": "Home",
            "crumb_to_previous": "About",
            "prev_link": "about",
        }
        return render(request, 'main_app/about-testimonials.html', context)
    else:
        redirect = reverse('about')
        return HttpResponseRedirect(redirect)


def contact(request):
    context = {
        "title": "Contact Us",
        "crumb_to": "Home",
        "link": "index"
    }
    return render(request, 'main_app/contact.html', context)


def services(request):
    all_services = _services
    context = {
        "title": "Our Services",
        "crumb_to": "Home",
        "link": "index",
        "services": all_services
    }
    return render(request, 'main_app/services.html', context)


def service(request, slug):
    all_services = _services
    services_length = len(all_services)

    def generate_threes():
        start = randrange(0, services_length)
        end = randrange(0, services_length)
        if (end - start) != 3:
            return generate_threes()
        else:
            return start, end
    single_service = next(
        service for service in _services if service['slug'] == slug)
    range_val = generate_threes()
    three_items = [all_services[item]
                   for item in range(range_val[0], range_val[-1])]
    context = {
        "services": three_items,
        "title": "Service",
        "subtitle": single_service['title'],
        "crumb_to": "Home",
        "crumb_to_previous": "Services",
        "prev_link": "services",
        "link": "index",
        "service": single_service,
        "service_content": single_service["content"].split("\n"),
        "thumbnail": "services/" + single_service['image']
    }
    print(single_service['image'])
    return render(request, 'main_app/service.html', context)


def sp_service(request, slug):
    specials = sp_services
    single_special = next(
        special for special in specials if special['slug'] == slug)
    context = {
        "title": "Service",
        "subtitle": single_special['title'],
        "crumb_to": "Home",
        "crumb_to_previous": "Services",
        "prev_link": "services",
        "link": "index",
        "service": single_special,
        "options": single_special['options'],
        "thumbnail": "services/" + single_special['image']
    }
    return render(request, 'main_app/sp_services.html', context)


def gallery(request):
    context = {
        "title": "Our Gallery",
        "crumb_to": "Home",
        "link": "index"
    }
    return render(request, 'main_app/gallery.html', context)

# custom 404 view


