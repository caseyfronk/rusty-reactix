use actix_files;
use actix_web::{get, post, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use std::env;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    let host = env::var("HOST").unwrap_or_else(|_| "127.0.0.1".to_string());
    let port: u16 = env::var("PORT")
        .unwrap_or_else(|_| "8080".to_string())
        .parse()
        .expect("PORT must be a valid u16");

    println!("🚀 Starting server at http://{}:{}", host, port);

    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .service(actix_files::Files::new("/", "./static").index_file("index.html"))
    })
    .bind((host, port))?
    .run()
    .await
}

#[get("/api/health")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().json("Health check OK")
}

#[post("/api/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}
