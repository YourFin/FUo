#!/bin/bash

# Unofficial Strict mode
set -euo pipefail
IFS=$'\n\t'

SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"

# cd into script directory
cleanup() {
    popd &>/dev/null || true
}
trap cleanup EXIT
pushd "$SCRIPTPATH" >/dev/null


# Generate logos
mkdir -p "./public/icons"
EXTENSION_SIZES=(16 48 128)
for size in ${EXTENSION_SIZES[@]} ; do
    echo
    echo "Build icon of size ${size}..."
    echo
    inkscape -z -e "public/icons/fuo-${size}.png" -w $size -h $size ./logo.svg
done

echo
echo "Packing assets in fuo.zip..."
echo

rm -f fuo.zip

cleanupPrime() {
    popd &>/dev/null || true
    popd &>/dev/null || true
}
trap cleanupPrime EXIT
pushd "public" >/dev/null

zip -r -FS ../fuo.zip *
