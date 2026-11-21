require "rack"

app = ->(env) { [200, { "content-type" => "text/plain" }, ["greenlight"]] }
Rack::Handler::WEBrick.run(app) if $PROGRAM_NAME == __FILE__
