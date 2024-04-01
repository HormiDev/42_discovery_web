ls -lA | grep -E '^d|^-' | wc -l | awk '{print $1}'
