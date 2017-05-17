Rails.application.routes.draw do
  resources :homes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'homes#home'

  get '/contact_us', :to => 'homes#contact_us'
  get '/services', :to => 'homes#services'
  get '/new_business_resources', :to => 'homes#new_business_resources'
  get '/privacy', :to => 'homes#privacy'
end
