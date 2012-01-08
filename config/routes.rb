Trailsy::Application.routes.draw do
  get "log_out" =>"sessions#destroy", :as => "log_out"  
  get "log_in" =>"sessions#new", :as => "log_in"
  get "sign_up" => "users#new", :as => "sign_up"

  match '/user/:id/validate/:code' => 'users#validate_email'

  offline = Rack::Offline.configure do
    cache "images/ajax-loader.gif"
    cache "images/flash/error.png"
    cache "images/flash/info.png"
    cache "images/flash/warning.png"
    cache "images/flash/success.png"
    cache "assets/application.css"
    cache "build/js/vendor/require-jquery.js"
    cache "build/js/main.js"
    network "/"
  end
  match "/application.manifest" => offline
  resources :users
  resources :sessions

  match 'languages'     => 'languages#index'
  match '/words/search' => 'words#search'
  resources :words do
    resources :translations
  end
  


  root :to => "home#index"
  
  #get "home/index"

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  # root :to => 'welcome#index'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id(.:format)))'
end
