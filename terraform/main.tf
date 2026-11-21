module "files" {
  source  = "hashicorp/dir/template"
  version = "1.0.2"

  base_dir = "${path.module}/files"
}

resource "random_pet" "name" {}
