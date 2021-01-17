package fileutility

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"justasking/GO/core/model/emailtemplate"
	"log"
	"os"
)

// ReadEmailsFromFile retrieves list of email values from file. One email per line
func ReadEmailsFromFile(pathToFile string) ([]string, error) {
	emails := []string{}

	file, err := os.Open(pathToFile)

	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		email := scanner.Text()
		emails = append(emails, email)
	}

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}

	return emails, err
}

// GetEmailTemplateFromFile retrieves body of email from file
func GetEmailTemplateFromFile(pathToFile string) (emailtemplatemodel.EmailTemplate, error) {

	var emailTemplate emailtemplatemodel.EmailTemplate

	b, err := ioutil.ReadFile(pathToFile)
	if err != nil {
		fmt.Print(err)
	}

	fmt.Println(b) // print the content as 'bytes'

	emailBody := string(b) // convert content to a 'string'

	emailTemplate.Body = emailBody

	return emailTemplate, err
}
