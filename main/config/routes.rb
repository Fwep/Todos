Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  defaults format: :json do
    namespace :api do
      resources :todos, except: [:edit, :new]
    end
  end
end
