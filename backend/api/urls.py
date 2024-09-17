from django.urls import path
from . import views

urlpatterns = [
    path('blogposts/', views.BlogPostListCreate.as_view(), name='blogposts-view-create'),
    path("blogposts/<int:pk>/", views.BlogPostRetrieveUpdateDestroy.as_view(), name="blogposts-view-retrieve-update-destroy"),
    path('test_get', views.get_blog, name='test_get'),
    path('test_post', views.post_blog, name='test_post'),
]