package main

import (
	"fmt"
	"justasking/GO/core/domain/email"
	"justasking/GO/emailsender/utility"
	"os"
	"path/filepath"
	"strconv"
	"time"
)

func main() {

	//0. Create log file
	currentPath, _ := filepath.Abs(filepath.Dir(os.Args[0]))
	file, err := os.Create(currentPath + "\\output" + "_" + time.Now().Format("20060102150405") + ".txt")

	if err != nil {
		fmt.Println(err.Error())
	} else {
		defer file.Close()

		// 1. Get email addresses from file
		addresses, err := fileutility.ReadEmailsFromFile("input/emails.txt")
		if err != nil {
			msg := "Unable to get emails from file."
			file.WriteString(msg)
		} else {

			// 2. Remove duplicates
			addresses = removeDuplicates(addresses)

			emailTemplate, err := fileutility.GetEmailTemplateFromFile("input/body.html")

			if err != nil {
				msg := "Unable to read email body from file."
				file.WriteString(msg)
			} else {
				for i := 0; i < len(addresses); i++ {
					time.Sleep(5 * time.Second)
					emailTemplate.To = addresses[i]
					emailTemplate.Subject = "Hard time reaching younger audiences in your church? Try justasking.io"
					emailSendResult := emaildomain.SendEmailWithCredentials(emailTemplate, "contact@justasking.io", "WXD8DUstkmJKmBCg5NLh2PXKjQkhEGYx")
					if emailSendResult.IsSuccess() {
						msg := strconv.Itoa(i+1) + " - " + addresses[i] + " : email sent." + "\n"
						fmt.Println(msg)
						file.WriteString(msg)
					} else {
						msg := "ERROR: " + addresses[i] + " : email could not be sent."
						fmt.Println(msg)
						file.WriteString(msg)
					}
				}
			}
		}
	}
}

func removeDuplicates(elements []string) []string {
	// Use map to record duplicates as we find them.
	encountered := map[string]bool{}
	result := []string{}

	for v := range elements {
		if encountered[elements[v]] == true {
			// Do not add duplicate.
		} else {
			// Record this element as an encountered element.
			encountered[elements[v]] = true
			// Append to result slice.
			result = append(result, elements[v])
		}
	}
	// Return the new slice.
	return result
}
