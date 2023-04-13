Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:3000'
    resource '*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options, :head], credentials: true do
      # This block is optional and allows you to specify more granular CORS settings for specific paths or routes.
      # For example:
      # resource '/api/*', headers: :any, methods: [:get, :post], credentials: true
    end
  end
end
