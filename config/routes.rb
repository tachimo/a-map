Rails.application.routes.draw do
  get "/map-serch", to: "map_search#index"
  root to: 'posts#index'
  resources :posts
end
