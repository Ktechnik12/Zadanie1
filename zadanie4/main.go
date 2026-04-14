package main

import (
	"zadanie4/controllers"
	"zadanie4/database"
	"zadanie4/models"

	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	database.Connect()

	database.DB.AutoMigrate(&models.Category{}, &models.Product{})

	e.POST("/products", controllers.CreateProduct)
	e.GET("/products", controllers.GetProducts)
	e.GET("/products/:id", controllers.GetProduct)
	e.PUT("/products/:id", controllers.UpdateProduct)
	e.DELETE("/products/:id", controllers.DeleteProduct)

	e.Logger.Fatal(e.Start(":1323"))
}