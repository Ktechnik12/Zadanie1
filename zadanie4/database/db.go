package database

import (
	"log"

	"gorm.io/gorm"
	"github.com/glebarez/sqlite"
)

var DB *gorm.DB

func Connect() {
	var err error
	DB, err = gorm.Open(sqlite.Open("data/test.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("DB connection failed:", err)
	}
}