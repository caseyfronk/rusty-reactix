use actix_files;
use actix_web::{get, post, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use serde::Serialize;
use std::env;
use ts_rs::TS;

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
            .service(health)
            .service(echo)
            .service(actix_files::Files::new("/", "./static").index_file("index.html"))
    })
    .bind((host, port))?
    .run()
    .await
}

#[get("/api/health")]
async fn health() -> impl Responder {
    HttpResponse::Ok().json("Health check OK")
}

#[post("/api/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

#[derive(Serialize, TS)]
#[serde(rename_all = "camelCase")]
#[ts(export)]
struct Todo {
    id: i32,
    title: String,
    completed: bool,
}
