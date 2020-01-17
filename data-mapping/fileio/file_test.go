package myfile

import (
	"fmt"
	"testing"
)

func TestReadCSV(t *testing.T) {
	// type args struct {
	// 	filename string
	// }
	// tests := []struct {
	// 	name    string
	// 	args    args
	// 	want    []CSVObj
	// 	wantErr bool
	// }{
	// 	// TODO: Add test cases.
	// }
	// for _, tt := range tests {
	// 	t.Run(tt.name, func(t *testing.T) {
	// 		got, err := ReadCSV(tt.args.filename)
	// 		if (err != nil) != tt.wantErr {
	// 			t.Errorf("ReadCSV() error = %v, wantErr %v", err, tt.wantErr)
	// 			return
	// 		}
	// 		if !reflect.DeepEqual(got, tt.want) {
	// 			t.Errorf("ReadCSV() = %v, want %v", got, tt.want)
	// 		}
	// 	})
	// }
	data, err := ReadCSV("../sportsingapore.csv")
	if err != nil {
		t.Fatalf("Loading of CSV failed because of '%+v'", err)
	}

	fmt.Println(data)
}

func TestReadJSON(t *testing.T) {
	// type args struct {
	// 	filename string
	// }
	// tests := []struct {
	// 	name    string
	// 	args    args
	// 	want    []OldJSONObj
	// 	wantErr bool
	// }{
	// 	// TODO: Add test cases.
	// }
	// for _, tt := range tests {
	// 	t.Run(tt.name, func(t *testing.T) {
	// 		got, err := ReadJSON(tt.args.filename)
	// 		if (err != nil) != tt.wantErr {
	// 			t.Errorf("ReadJSON() error = %v, wantErr %v", err, tt.wantErr)
	// 			return
	// 		}
	// 		if !reflect.DeepEqual(got, tt.want) {
	// 			t.Errorf("ReadJSON() = %v, want %v", got, tt.want)
	// 		}
	// 	})
	// }

	data, err := ReadJSON("../sportsingapore.json")
	if err != nil {
		t.Fatalf("Loading of JSON failed because of '%+v'", err)
	}

	fmt.Println(data)
}

func TestConvertOldToNewJsonObj(t *testing.T) {
	data, err := ReadJSON("../sportsingapore.json")
	if err != nil {
		t.Fatalf("Loading of JSON failed because of '%+v'", err)
	}

	val, err := ConvertOldToNewJsonObj(data[0])
	if err != nil {
		t.Fatalf("Conversion failed because of '%+v'", err)
	}

	statusOK := val.Status == data[0].Status
	linktxtOK := val.LinkText == data[0].LinkText
	attrhrefOK := val.AttrHref == data[0].AttrHref
	isinternal := val.IsInternal == data[0].IsInternal
	attrclass := val.AttrClass == data[0].AttrClass
	attrtgt := val.AttrTarget == data[0].AttrTarget
	resurl := val.ResolvedURL == data[0].ResolvedURL
	pageurl := val.PageURL == data[0].PageURL

	if !statusOK || !linktxtOK || !attrhrefOK || !isinternal ||
		!attrclass || !attrtgt || !resurl || !pageurl {
		t.Fatalf("Something was false")
	}

}

func TestOutputToNewJsonFile(t *testing.T) {
	data, err := ReadJSON("../sportsingapore.json")
	if err != nil {
		t.Fatalf("Loading of JSON failed because of '%+v'", err)
	}

	first, err := ConvertOldToNewJsonObj(data[0])
	if err != nil {
		t.Fatalf("Conversion failed because of '%+v'", err)
	}

	second, err := ConvertOldToNewJsonObj(data[1])
	if err != nil {
		t.Fatalf("Conversion failed because of '%+v'", err)
	}

	third, err := ConvertOldToNewJsonObj(data[2])
	if err != nil {
		t.Fatalf("Conversion failed because of '%+v'", err)
	}

	var sample []NewJSONObj
	sample = append(sample, first)
	sample = append(sample, second)
	sample = append(sample, third)

	err = OutputToNewJsonFile(sample)
	if err != nil {
		t.Fatalf("Output failed because of '%+v'", err)
	}
}
