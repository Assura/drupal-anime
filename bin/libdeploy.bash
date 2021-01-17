

function ensure() {
  local cmd=$1
  
  if !type "$cmd" > /dev/null 2>&1 ; then
    echo "Command \"$cmd\" not found. Please install it."
    exit
  fi
}